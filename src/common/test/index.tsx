export function Sequence() {
    function _next() {
        // @ts-ignore
        this.now = this.now + 1;
        // @ts-ignore`
        return this.now
    }
    if (!Sequence.prototype.next) {
        Sequence.prototype.next = _next.bind({now: 0})
    }
}

// export function Sequence() {
//     function _next() {
//         let now = 0;
//         return () => {
//             now = now + 1;
//             return now
//         }
//     }
//     if (!Sequence.prototype.next) {
//         Sequence.prototype.next = _next()
//     }
// }