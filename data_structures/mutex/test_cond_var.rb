tasks = []
mutex = Mutex.new
cond_var = ConditionVariable.new
threads = []

class Task
  def initialize
    @duration = rand()
  end

  def execute
    sleep @duration
  end
end

# producer threads
threads += 2.times.map do
  Thread.new do
    while true
      mutex.synchronize do
        tasks << Task.new
        cond_var.signal
        puts "Added task: #{tasks.last.inspect}"
      end
      # limit task production speed
      sleep 0.5
    end
  end
end

# consumer threads
threads += 5.times.map do
  Thread.new do
    while true
      task = nil
      mutex.synchronize do
        while tasks.empty?
          cond_var.wait(mutex)
        end

        # the `if tasks.count == 0` statement will never be true as the thread
        # will now only reach this line if the tasks array is not empty
        puts 'This thread has nothing to do' if tasks.count == 0

        # similarly, we can now remove the `if tasks.count > 0` check that
        # used to surround this code. We no longer need it as this code will
        # now only get executed if the tasks array is not empty.
        task = tasks.shift
        puts "Removed task: #{task.inspect}"
      end
      # Note that we have now removed `unless task.nil?` from this line as
      # our thread can only arrive here if there is indeed a task available.
      task.execute
    end
  end
end

threads.each(&:join)
