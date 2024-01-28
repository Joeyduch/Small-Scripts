/**
 * Just a small script to demonstrate mapping through a tree data structure
 */

class Tree {
    constructor(item, children) {
        this.item = item;
        this.children = children
    }

    map(func) {
        const val = func(this.item);
        if(!this.children || !this.children.length) {
            return new Tree(val, []);
        }

        return new Tree(
            val,
            this.children.map((x) => {
                const t = new Tree(x.item, x.children);
                return t.map(func);
            })
        );
    }
}



const versionsTree = new Tree(
    "1",
    [
        new Tree(
            "1.1",
            []
        ),

        new Tree(
            "1.2",
            [
                new Tree(
                    "1.2.1",
                    []
                ),

                new Tree(
                    "1.2.2",
                    []
                )
            ]
        )
    ]
)



const newVersionsTree = versionsTree.map((x) => {
    return "version " + x;
})

console.log(newVersionsTree);