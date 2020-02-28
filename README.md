# Airport route problem

## The Problem

You are given a list of airports (three-letter codes like 'JFK'), a list of routes (one-way flights from one airport to another like ['JFK', 'SFO']), and a starting airport. Write a function that returns the minimum number of airport connections (one-way flights) that need to be added in order for someone to be able to reach any airport in the list, starting at the starting airport. Note that the connections don't have to be direct; it's okay if an airport can only be reached from the starting airport by stopping at other airports first

## Sample input: 

```
[ 
"BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD", 
],
```

```
[ 
["DSM", "ORD"], ["ORD", "BGI"], ["BGI", "LGA"], ["SIN", "CDG"], ["CDG", "SIN"], ["CDG", "BUD"], ["DEL", "DOH"], ["DEL", "CDG"], ["TLV", "DEL"], ["EWR", "HND"], ["1-IND", "ICN"], ["HND", "JFK"] ["ICN", "JFK"], ["JFK", "LGA"], ["EYW", "LHR"], ["LHR", "SFO"], ["SFO", "SAN"], ["SFO", "DSM"], ["SAN", "EYVV"],
 ],
```

```
"LGA" 
```


## Sample output:
3

## To run
Type  `node routes.js` in terminal workspace folder.

## To Change starting airport

To edit startingNode in the code. 
example:
    ```
    let startingNode ='LGA' // line 22
    ```
