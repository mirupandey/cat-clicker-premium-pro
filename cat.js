$(function() {

	var data = {
		catNames: ['Sweety', 'Pinki', 'Nikki', 'Chinki', 'Ricky'], 
		catURL: ['cat_1.jpg', 'cat_2.jpg', 'cat_3.jpg', 'cat_4.jpg', 'cat_5.jpg'],
		click: '0',
		display: $('#display'),
		admin: $('#admin'),
		elem: document.createElement('div'),
		div1: document.createElement('div'),
		div2: document.createElement('div'),
		nameData: document.createElement('input'),
		imgURLData: document.createElement('input'),
		clickData: document.createElement('input'),
		changeValue: document.createElement('button'),
		cancelValue: document.createElement('button'),
		image: new Image(200,200),
		button: document.createElement('button')
	};

	var octopus = {
		displayCat: function(id) {

			if(data.display.has("div")) {
				data.display.empty();
			};

			data.image.src = data.catURL[id-1];
			
			view.render(id);
		},

		init: function() {
			view.init();
		}
	};

	var view = {
		init: function() {
			
			$('li').click(function() {
				octopus.displayCat(this.id);
			});
		},

		render: function(id) {
			data.button.innerHTML = 'Admin';
			data.div1.innerHTML = data.catNames[id-1];
			data.elem.appendChild(data.div1);
			data.elem.appendChild(data.div2);
			data.elem.appendChild(data.image);
			data.elem.appendChild(data.button);
			data.nameData.type = "text";
			data.imgURLData.type = "text";
			data.clickData.type = "text";

			data.image.addEventListener('click',function() {
				data.click++;
				data.div2.innerHTML = data.click;
			});
			
			data.button.addEventListener('click', function(){
				data.nameData.value = data.catNames[id-1];
				data.imgURLData.value = `cat${id}.jpg`;
				data.clickData.value = data.click;
				data.changeValue.innerHTML = 'Change';
				data.cancelValue.innerHTML = 'Cancel';

				data.admin.append(data.nameData);
				data.admin.append(data.imgURLData);
				data.admin.append(data.clickData);
				data.admin.append(data.changeValue);
				data.admin.append(data.cancelValue);

				data.changeValue.addEventListener('click', function() {
					data.catNames[id] = data.nameData.value;
					data.image.src = data.imgURLData.value;
					data.click = data.clickData.value;
				});

				data.cancelValue.addEventListener('click', function() {
					data.admin.empty();
				})
			});

			data.display.append(data.elem);
		}
	}

	octopus.init();
}());