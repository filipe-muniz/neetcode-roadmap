package arrays_hashing;

import java.util.HashMap;

public class ValidAnagram {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()){
            return false;

        }
        var map = new HashMap<Character, Integer>();
        char []sChar = s.toCharArray();
        char []tChar = t.toCharArray();

        for(int i = 0; i < sChar.length; i++){
            map.put(sChar[i], map.getOrDefault(sChar[i], 0) +1);
            map.put(tChar[i], map.getOrDefault(tChar[i], 0) -1);
        }
        return map.values().stream().allMatch(el -> el == 0);
    }
}
