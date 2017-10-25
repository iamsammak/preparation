[Workday - Ruby Concurrency: IN Praise of Condition Variables](https://workday.github.io/ruby/2017/08/14/ruby-concurrency-in-praise-of-condition-variables)

A mutex is a data structure for protecting shared state between multiple threads. When a piece of code is wrapped inside a mutex, the mutex guarantees that only one thread at a time can execute this code. If another thread wants to start executing this code, it'll have to wait until our first thread is done with it. I realize this may all sound a bit abstract, so now is probably a good time to bring in some example code.


### Writing to shared state
In this first example, we’ll have a look at what happens when two threads try to modify the same shared variable. The snippet below shows two methods: counters_with_mutex and counters_without_mutex. Both methods start by creating a zero-initialized counters array before spawning 5 threads. Each thread will perform 100,000 loops, with every iteration incrementing all elements of the counters array by one. Both methods are the same in every way except for one thing: only one of them uses a mutex.

```ruby
  def counters_with_mutex
    mutex = Mutex.new
    counters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    5.times.map do
      Thread.new do
        100000.times do
          mutex.synchronize do
            counters.map! { |counter| counter + 1 }
          end
        end
      end
    end.each(&:join)

    counters.inspect
  end

  def counters_without_mutex
    counters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    5.times.map do
      Thread.new do
        100000.times do
          counters.map! { |counter| counter + 1 }
        end
      end
    end.each(&:join)

    counters.inspect
  end

  puts counters_with_mutex
  # => [500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000, 500000]

  puts counters_without_mutex
  # => [500000, 447205, 500000, 500000, 500000, 500000, 203656, 500000, 500000, 500000]
  # note that we seem to have lost some increments here due to not using a mutex
```
