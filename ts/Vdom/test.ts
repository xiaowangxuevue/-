
interface Options {
    el: string | HTMLElement
}

interface VueCls {
    options: Options,
    init(): void
}

interface Vnode {
    tag: string,
    text?: string,
    children?: Vnode[]
}

class Dom {
    // 创建节点
    private createElement(el: string) {
        return document.createElement(el)
    }

    // 填充文本

    setText(el: HTMLElement, text: string | null) {
        el.textContent = text
    }

    //实现渲染

    render(data: Vnode) {
        let root = this.createElement(data.tag)
        if(data.children && Array.isArray(data.children)){
            data.children.forEach(item => {
               let child  =  this.render(item)
               
               this.setText(child, item.text ?? null)
               root.appendChild(child)
            })
        }else {
        
            this.setText(root, data.text ?? null)
        }
        return root

    }
}

class Vue extends Dom implements VueCls {
    options: Options;
    constructor(options: Options) {
        super()
        this.options = options
        this.init()
    }

    init(): void {
        console.log(321123);
        
        let data: Vnode = {
            tag: 'div',
            children: [
                {
                    tag: 'section',
                    text: '第一个元素',
                },
                {
                    tag: 'section',
                    text: '第而个元素',
                }
            ]

        }

        console.log(this.options.el,'...');
        
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el 
        app?.appendChild(this.render(data))


    }
}

new Vue({
    el: "#app",
})