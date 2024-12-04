class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(head) {
    if (head === null) {
        console.log("empty");
        return;
    }
    let temp = head;
    let result = [];
    do {
        result.push(temp.data);
        temp = temp.next;
    } while (temp !== head);
    console.log(result.join(' '));
}

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let key = parseInt(readLine());
        let head = new Node(arr[0]);
        let tail = head;

        // Creating the circular linked list
        for (let j = 1; j < arr.length; ++j) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        tail.next = head; // Make the list circular

        // Instantiate the Solution class and process the linked list
        const ob = new Solution();
        head = ob.deleteNode(head, key); // Delete the node with the given key
        head = ob.reverse(head);         // Reverse the circular linked list

        // Print the modified linked list
        printList(head);
        console.log("~");
    }
}

// User function Template for javascript
class Solution {
    // Function to reverse a circular linked list
    reverse(head) {
        // To be solved
    }

    // Function to delete a node from the circular linked list
    deleteNode(head, key) {
        // To be solved
    }
}