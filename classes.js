(function () {
            function personal() {
            }
            personal.prototype.name = null;
            personal.prototype.age = 0;
            personal.prototype.getInfo = () => {
                personal.prototype.name = prompt("Enter Your Name");
                personal.prototype.age = parseInt(prompt("Enter Your Age"));
                localStorage.setItem("name",  personal.prototype.name);
                localStorage.setItem("age",  personal.prototype.age);
            }

            function official() {
            }

            official.prototype = Object.create(personal.prototype);

            official.prototype.post = null;
            official.prototype.sal = 10;

            official.prototype.getOInfo = () => {
                official.prototype.post = prompt("Enter Your Post");
                official.prototype.sal = parseInt(prompt("Enter Your Salary"));
                    localStorage.setItem("post", official.prototype.post);
                    localStorage.setItem("sal", official.prototype.sal);
            }

            official.prototype.putInfo = () => {
                return [
                    localStorage.getItem("name"),
                    localStorage.getItem("age"),
                    localStorage.getItem("post"),
                    localStorage.getItem("sal")]
            }
        

        var o = new official();
        o.getInfo();
        o.getOInfo();
        document.getElementById("gb").innerHTML = `<p>Hi this is <br>${o.putInfo()}`;
        })();