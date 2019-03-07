let app = new Vue({
    el: '#app',
    data: {
        name: '',
        click_num: 0,
        date: '',
        height: '',
        rightName: false,
        rightDate: false,
        rightHeight: false,
        code: "",
    },
    computed: {
        unlocked: function() {
            if (this.rightName && this.rightDate && this.rightHeight){
                return true;
            }
            else return false;
        },
        result: function() {
            if (this.unlocked && this.click_num === 9){
                let text = "<a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\">You've unlocked your prize! Click here to view!</a>";
                document.getElementById('resultDiv').innerHTML = text;
                return "Congratulations!!!"
            }
            else if(this.unlocked){
                let text = "<a href=\"https://www.marvel.com/captainmarvel/\">You've unlocked your prize! Click here to view!</a>"
                document.getElementById('resultDiv').innerHTML = text;
                return "Congratulations!!!"
            }
            else{
                return '';
            }
        }
    },
    methods: {
        checkName(){
            this.click_num++;
            if(this.name === "Captain Marvel" || this.name === "captain marvel" || this.name === "Carol Danvers" || this.name === "carol danvers"){
                this.rightName = true;
                let text = "<p>Correct!</p>";
                document.getElementById("response1").innerHTML = text;
            }
            else{
                let text = "<p>Seriously? Try again.</p>";
                document.getElementById("response1").innerHTML = text;
            }
        },
        checkDate(){
            this.click_num++;
            if(this.date === '05/02/2008'){
                this.rightDate = true;
                let text = "<p>Correct!</p>";
                document.getElementById("response2").innerHTML = text;
            }
            else{
                let text = "<p>Wrong! Someone needs to brush up on their MCU history.</p>";
                document.getElementById("response2").innerHTML = text;
            }
        },
        checkHeight(){
            this.click_num++;
            if(this.height === '5\'8\"'){
                this.rightHeight = true;
                let text = "<p>Correct!</p>";
                document.getElementById("response3").innerHTML = text;
            }
            else{
                let text = "<p>C'mon, this one was supposed to be easy.</p>";
                document.getElementById("response3").innerHTML = text;
            }
        },
        checkCode(){
            if(this.code === "up up down down left right left right b a"){
                document.getElementById("hints").innerHTML = "<p>Hints Unlocked!</p><p>1. The star of the newest Marvel movie<br>2. Release of the first Marvel movie<br>3. Spidey is pretty small<\p>"
            }
            else{
                document.getElementById("hints").innerHTML += "<p>Nope.</p>"
            }
        }
    }
});