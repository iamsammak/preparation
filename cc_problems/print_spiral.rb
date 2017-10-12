def print_spiral(a)
  # a = a.deep_dup(1)
  result = []

  while true
    break if a.length == 0 || a[0].length == 0

    # remove the first row
    result.concat(a.shift)
    break if a.length == 0 || a[0].length == 0

    # remove the right side
    a.each { |row| result << row.pop }
    break if a.length == 0 || a[0].length == 0

    # remove the bottom row
    result.concat(a.pop.reverse)
    break if a.length == 0 || a[0].length == 0

    # remove the left side
    a.reverse.each { |row| result << row.shift }
  end

  result
end
