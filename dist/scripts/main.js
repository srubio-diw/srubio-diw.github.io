"use strict";function loadPage(a){$("#page").load(a)}$(".nav > li").on("click",function(){$(".nav").find(".active").removeClass("active"),$(this).addClass("active")});