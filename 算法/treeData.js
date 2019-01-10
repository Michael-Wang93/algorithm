var nodes = [
    {"id":1,"pId":0,"name":"父节点1 - 展开","open":true},
    {"id":11,"pId":1,"name":"父节点11 - 折叠"},
    {"id":12,"pId":1,"name":"父节点12 - 折叠"},
    {"id":13,"pId":1,"name":"父节点13 - 没有子节点"},
    {"id":2,"pId":0,"name":"父节点2 - 折叠"},
    {"id":21,"pId":2,"name":"父节点21 - 展开","open":true},
    {"id":22,"pId":2,"name":"父节点22 - 折叠"},
    {"id":23,"pId":2,"name":"父节点23 - 折叠"},
    {"id":3,"pId":0,"name":"父节点3 - 没有子节点"}
];

function treeData(nodes, croot, cpid, cid, cchildren) {
    const pid = cpid || 'pId';
    const root = croot;
    const idx = cid || 'id';
    const childrenName = cchildren || 'children';
    let max = nodes.length;
    function getTree(id) {
        let children = [];
        let index = 0;
        while(index <= max) {
            if(nodes[index] && nodes[index][pid] === id) {
                children.push(nodes[index]);
                nodes[index][childrenName] = getTree(nodes[index][idx])
            }
            index++;
        }
        if(!children.length) {
            return null;
        } else {
            return children;
        }
    }

    return getTree(root);
}
const data = treeData(nodes, 0);


function findParents(data, aimId) {
    
    function _find(list) {
        for (let node of list) {
            if (node.id === aimId) {
                return [aimId];
            } else {
                if (node.children) {
                    const listArr = [node.id].concat(_find(node.children));
                    if(listArr[listArr.length - 1]) {
                        return listArr;
                    }
                }
            }
        }
    }
    return _find(data);
}
let ff = findParents(data, 23);
console.log(ff);