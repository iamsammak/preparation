# SKELETON
require_relative 'p05_hash_map'
require_relative 'p04_linked_list'

class LRUCache
  attr_reader :count
  def initialize(max, prc)
    @map = HashMap.new
    @store = LinkedList.new
    @max = max
    @prc = prc
  end

  def count
    @map.count
  end

  def get(key)
    # if key is inside HashMap
    # return the node whose key == key
    # set tempNode = found node
    # remove the node from its place in its bucket/LinkedList
    # then reappend it to the back of the list (just recently used)

    # now if key is NOT inside HashMap
    #

    if map[key] # map.get(key)
      node = map[key]
      update_node!(node)
      node.val
    else
      calc!(key)
    end
  end

  def to_s
    'Map: ' + @map.to_s + '\n' + 'Store: ' + @store.to_s
  end

  private

  def calc!(key)
    # suggested helper method; insert an (un-cached) key

  end

  def update_node!(node)
    # suggested helper method; move a node to the end of the list
    node.remove
    map[node.key] = store.append(node.key, node.val)
  end

  def eject!
  end
end


# require_relative 'p05_hash_map'
# require_relative 'p04_linked_list'
#
# class LRUCache
#   attr_reader :count
#   def initialize(max, prc)
#     @map = HashMap.new
#     @store = LinkedList.new
#     @max = max
#     @prc = prc
#   end
#
#   def count
#     @map.count
#   end
#
#   def get(key)
#     if @store.include?(key)
#       update_link!(@map[key])
#     else
#       calc!(key)
#       eject! if count > @max
#     end
#     @map[key].val
#   end
#
#   def to_s
#     "Map: " + @map.to_s + "\n" + "Store: " + @store.to_s
#   end
#
#   private
#
#   def calc!(key)
#     # suggested helper method; insert an (un-cached) key
#     val = @prc.call(key)
#     link = @store.insert(key, val)
#     @map[key] = link
#   end
#
#   def update_link!(link)
#     # suggested helper method; move a link to the end of the list
#     link.prev.next = link.next
#     link.next.prev = link.prev
#     @store.insert(link.key, link.val)
#   end
#
#   def eject!
#     @store.remove(@store.first.key)
#   end
# end
