class trieNode{
    data;
    children = [26];
    terminalNode = false;

    constructor(character) {
        this.data = character;
        for(let i = 0; i < 26; i++) {
            this.children[i] =  null;
        }
    }
};

class trie {
    starting = new trieNode('*');

     insert(root, word) {
        if(word.length == 0) {
            root.terminalNode = true;
            return;
           
        }

        let index = word.charCodeAt(0) - 65;
    

        if(root.children[index] != null) {

            var temp = root.children[index];

        } else {
            var temp = new trieNode(word[0]);
            root.children[index] = temp;
        }

        this.insert(temp, word.slice(1))
    
    }
}

var t = new trie();

t.insert(t.starting, 'HELLO');
t.insert(t.starting, 'HELL')
console.log(t);