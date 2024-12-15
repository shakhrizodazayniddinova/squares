const boxes = document.getElementsByClassName("box");

for (const box of boxes) {
    box.onmouseover = async () => {
        box.style.backgroundColor = "coral";
        box.style.transition = "0.5s";

        let color = await new Promise((resolve, reject) => {
            setTimeout(() => {
                box.style.backgroundColor = "pink";
                resolve("yellow");
            }, 500);
        })
        color = await new Promise((resolve, reject) => {
            setTimeout(() => {
                box.style.backgroundColor = color;
                resolve("rgb(65, 61, 61)");
            }, 500)
        })
        setTimeout(() => {
            box.style.backgroundColor = color;
            box.style.transition = "1s";
        }, 500);

        // .then((color) => {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             box.style.backgroundColor = color;
        //             resolve("rgb(65, 61, 61)");
        //         }, 500)
        //     })
        // }).then((color) => {
        //     setTimeout(() => {
        //         box.style.backgroundColor = color;
        //         box.style.transition = "1s";
        //     }, 500);
        // })
    }
}