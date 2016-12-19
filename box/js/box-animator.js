$(
        function () {
            var border = $("#border");
            var box = $("#box");

            var borderMaxHeight = border.height();
            var borderMaxWidth = border.width();

            //[x1,x2,y1,y2,'Str']
            var positions = [
                [0, 100, 0, 100, "row1 text1"], [100, 200, 100, 200, "row1 text2"], [200, 300, 200, 300, "row1 text3"]

            ];

            var arrayMaxLen = positions.length;
            var currIndex = 0;
            var operatorTop = "+";
            var operatorLeft = "+";

            function move() {
                if (currIndex >= arrayMaxLen - 1) {
                    currIndex = 0;
                } else
                {
                    currIndex++;
                }
                var x1 = positions[currIndex][0];
                var x2 = positions[currIndex][1];
                var y1 = positions[currIndex][2];
                var y2 = positions[currIndex][3];
                var position = box.position();
                var currentY = position.top + box.height();
                var currentX = position.left + box.width();

                if (currentY + (y2 - y1) >= borderMaxHeight)
                {
                    operatorTop = "-";
                } else if (position.top - (y2 - y1) <= 0)
                {
                    operatorTop = "+";
                }

                if (currentX + (x2 - x1) >= borderMaxWidth)
                {
                    operatorLeft = "-";
                } else if (position.left - (x2 - x1) <= 0)
                {
                    operatorLeft = "+";
                }
                box.css({"height": (y2 - y1), "width": (x2 - x1)}).animate({
                    top: operatorTop + "=" + x1 + "px",
                    left: operatorLeft + "=" + y1 + "px"
                }, 1000, function () {
                    //when finish
                });

                //console.log(currIndex);

            }


            var interval = setInterval(function () {
                move();

            }, 3000);

            box.hover(function () {
                clearInterval(interval);
                var str = positions[currIndex][4];

                alert(str);
            });

            box.mouseleave(function () {
                interval = setInterval(function () {
                    move();

                }, 3000);
            });


            //boxAnimate();
        });


