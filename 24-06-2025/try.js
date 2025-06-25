const timer = {
    seconds:0,
    start: function(){
        setInterval(()=>{
            this.seconds++;
            console.log(this.seconds)
        },1000)
    }
}
 
timer.start()
 