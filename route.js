let airPortsRoutes =[ 
    ["DSM", "ORD"], 
    ["ORD", "BGI"], 
    ["BGI", "LGA"], 
    ["SIN", "CDG"], 
    ["CDG", "SIN"], 
    ["CDG", "BUD"], 
    ["DEL", "DOH"], 
    ["DEL", "CDG"], 
    ["TLV", "DEL"], 
    ["EWR", "HND"], 
    ["HND", "ICN"],
    ["HND", "JFK"], 
    ["ICN", "JFK"], 
    ["JFK", "LGA"], 
    ["EYW", "LHR"], 
    ["LHR", "SFO"], 
    ["SFO", "SAN"], 
    ["SFO", "DSM"], 
    ["SAN", "EYW"],
     ]
let startingNode ='LGA'
let airPorts = [ 
    "BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD", 
    ];
let adjacencyMatrix = [];
let numberOfConnection = 0;
console.log('new routes')
findConnection()
console.log("number of connection",numberOfConnection)

//function to find minimum number of connection that required to reach all other airports.
function findConnection(){
    let path = [];
    let degree =[];
    

    // formation of adjacencyMatrix for given routes
    airPorts.map((item)=> {
        adjacencyMatrix.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    })
    airPortsRoutes.map((item, index) => {
        let row = airPorts.indexOf(item[0]);
        let column = airPorts.indexOf(item[1]);
        adjacencyMatrix[row][column] = 1;
    })

    //finding degree and path visited by each node
    adjacencyMatrix.map((item,index) => {
        let visitedNodes = [index]
        degree.push(findNumberConnections(item, visitedNodes))
        path.push(visitedNodes);
    })

    // iteration to find the new connection required to add 
    let flag =0;
    while(flag == 0) {
        max = Math.max(...degree)
        if(max >0) {
            indexOFMaxDegree = degree.indexOf(max)
            if(!path[airPorts.indexOf(startingNode)].includes(indexOFMaxDegree) && degree[airPorts.indexOf(startingNode)] <= 17 ) {
                airPortsRoutes.push([startingNode,airPorts[indexOFMaxDegree]])
                numberOfConnection++;
                console.log([startingNode,airPorts[indexOFMaxDegree]])
                findConnection()
                flag++;
            } else if (path[airPorts.indexOf(startingNode)].includes(indexOFMaxDegree) && indexOFMaxDegree == degree.lastIndexOf(max)){
                while(degree.indexOf(max) != -1) {
                    degree = degree.map((element)=> {
                        if(element != max) {
                            return element;
                        } else {
                            return 0;
                        }
                    })
                }
            } else if(indexOFMaxDegree < degree.lastIndexOf(max)){
                degree = degree.map((element, index)=> {
                    if(element == max && index <= indexOFMaxDegree ){
                        return 0;
                    } else {
                        return element;
                    }
                })
        
            }
        } else {
            flag++;
        }
    }
}

// function to find number of connections per node.
function findNumberConnections(item, visitedNodesArray) {
    let  childCount=0;
    let degreeOFChildNodes=0
    item.map((element,index) => {
        if(item[index] == 1 && !visitedNodesArray.includes(index)){
            visitedNodesArray.push(index)
            childCount++;
            degreeOFChildNodes += findNumberConnections(adjacencyMatrix[index],visitedNodesArray)
        }
    })
     return childCount+degreeOFChildNodes;
}