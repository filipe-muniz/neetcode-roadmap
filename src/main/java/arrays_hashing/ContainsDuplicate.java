package arrays_hashing;

import java.util.HashSet;

public class ContainsDuplicate {
    public boolean containsDuplicate(int[] nums) {
          var set = new HashSet<Integer>();
          for(int element : nums){
              if(set.contains(element)){
                  return true;
              }
              set.add(element);
          }
          return false;
    }
}
