;
(function(globle) {
	var Progress = function(el, opt) {
		var container = $$(el)[0],
		data = {
			total: 100,
			current: 0,
			flag: 95,
			state: "load"
		},
		timeInterval;
		this.start = function() {
			var me = this;
			if (opt.end!="man") {
				me.evtHanlde();
			}
			me.set(0);
			timeInterval = setInterval(function() {
				me.process();
			}, 200);
		}
		this.set = function(number) {
			var me = this;
			data.current = number;
			container.style.width = (number/data.total*100)+"%";
			console.log(get("current"),"Progress");
		}
		this.process = function() {
			var me = this,
				data = get(),
				number = random() + data.current;
			data.state === "load" && (number <= data.flag ) && me.set(number);
		}
		this.done = function() {
			var me = this;
			var data = get();
			data.state = "done";
			me.set(data.total);
			me.destory();
			console.log("完成了");
		}
		this.destory = function() {
			var me = this;
			setTimeout(function(){
				container.style.display="none";
			}, 1000)
				clearInterval(timeInterval);
		}
		this.evtHanlde = function() {
			var me = this;
			eventUtil.addEvent(globle, "load", function() {
				me.done();
			});
		}
		function get(name) {
			return name !== undefined ? data[name] : data;
		}
		 function random() {
			return 20 * Math.random(0, 1);
		}
	}
	if (globle.progress) {
		globle["_progress"] = progress;
	}

	var eventUtil = {
		addEvent: function(elem, eventName, handler) {　　
			if (elem.attachEvent) {　　　　
				elem.attachEvent("on" + eventName, handler);　　
			} else if (elem.addEventListener) {　　　　
				elem.addEventListener(eventName, handler, false);　　
			}
		},
		removeEvent: function(elem, eventName, handler) {　　
			if (elem.detachEvent) {　　　　
				elem.detachEvent("on" + eventName, handler);　　
			} else if (elem.removeEventListener) {　　　　
				elem.removeEventListener(eventName, handler, false);　　
			}
		}
	}
	var $$ = function(selector, content) {
		var elems = (content || (content = document)).querySelectorAll(selector);
		return Array.prototype.slice.call(elems, 0);
	}
	globle.Progress = Progress;
})(window);
