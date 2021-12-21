 $(function () {
            $("#menu").click(function () {
                $("#navb").slideToggle();
            });
        });


        $(window).resize(function () {
            if (window.innerWidth <= 599) {
                $('#navb').hide();
            }
        });

        $(function (){
            var w=window.innerWidth;             

            $('#perv_dot').click(function(){
                $('.slide_img li:last').prependTo('.slide_img');

                $('.slide_img').css('margin-left', -w);

                $('.slide_img').stop().animate({ marginLeft: 0 }, 800)
            });

            $('#next_dot').click(function(){
                $('.slide_img').stop().animate({ marginLeft: -w}, 800, function () {

                    $('.slide_img li:first').appendTo('.slide_img');

                    $('.slide_img').css({ marginLeft: 0 });
            });
        });

    });

        $(function () {
            var w=window.innerWidth - 20; 
                if (window.matchMedia("(max-width:1200px)").matches) {
                    $('.prev').click(function () {

                        $('#slide .item_flex:last').prependTo('#slide');

                        $('#slide').css('margin-left', -w);

                        $('#slide').stop().animate({ marginLeft: 0 }, 1000)

                    });



                    $('.next').click(function () {

                        $('#slide').stop().animate({ marginLeft: -w }, 1000, function () {

                            $('#slide .item_flex:first').appendTo('#slide');

                            $('#slide').css({ marginLeft: 0 });

                        });

                    });
             

            } else {
                $('.prev').click(function () {

                    $('#slide .item_flex:last').prependTo('#slide');

                    $('#slide').css('margin-left', -361);

                    $('#slide').stop().animate({ marginLeft: 0 }, 1000)

                });

                $('.next').click(function () {

                    $('#slide').stop().animate({ marginLeft: -361 }, 1000, function () {

                        $('#slide .item_flex:first').appendTo('#slide');

                        $('#slide').css({ marginLeft: 0 });

                    });

                });
            };
        });

        $(function () {
                $(window).scroll(function () {
                    var numberingOffset = $('#count_intro').offset();
                    if ($(document).scrollTop() < numberingOffset.top) {
                        var dailyNum = 145;
                        var bestNum = 65;
                        var masterNum = 659;
                        var ourNum = 109;

                        $({
                            val: 0
                        }).animate({
                            val: dailyNum
                        }, {
                            duration: 2000,
                            step: function () {
                                var num = dailyNumCommas(Math.floor(this.val));
                                $(".daily").text(num);
                            },
                            complete: function () {
                                var num = dailyNumCommas(Math.floor(this.val));
                                $(".daily").text(num);
                            }
                        });

                        function dailyNumCommas(x) {
                            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }

                        $({
                            val: 0
                        }).animate({
                            val: bestNum
                        }, {
                            duration: 2000,
                            step: function () {
                                var num2 = bestNumCommas(Math.floor(this.val));
                                $(".sitnum").text(num2);
                            },
                            complete: function () {
                                var num2 = bestNumCommas(Math.floor(this.val));
                                $(".sitnum").text(num2);
                            }
                        });

                        function bestNumCommas(x) {
                            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }

                        $({
                            val: 0
                        }).animate({
                            val: masterNum
                        }, {
                            duration: 2000,
                            step: function () {
                                var num3 = masterNumCommas(Math.floor(this.val));
                                $(".booknum").text(num3);
                            },
                            complete: function () {
                                var num3 = masterNumCommas(Math.floor(this.val));
                                $(".booknum").text(num3);
                            }
                        });

                        function masterNumCommas(x) {
                            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }
                        $({
                            val: 0
                        }).animate({
                            val: ourNum
                        }, {
                            duration: 2000,
                            step: function () {
                                var num4 = ourNumCommas(Math.floor(this.val));
                                $(".newbook").text(num4);
                            },
                            complete: function () {
                                var num4 = ourNumCommas(Math.floor(this.val));
                                $(".newbook").text(num4);
                            }
                        });

                        function ourNumCommas(x) {
                            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }
                    } else return;
                });
            });