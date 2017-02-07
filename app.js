
// 初始化画布
var canvas = document.getElementById("game2048");
var context = canvas.getContext('2d');

canvas.height = 640;
canvas.width = 360;

// 绘制卡片
for (var i = 0; i < 4; i++) {
	for (var j = 0; j < 4; j++) {
		context.rect(85*j + 15, 85*i + 15, 75, 75);
	}
}

context.fillStyle = "#B8D9F6";
context.fill();

// 初始化数据列表
var data = new Array;
for (var i = 0; i < 4; i++) {
	data[i] = new Array;
	for (var j = 0; j < 4; j++) {
		data[i][j] = 0;
	}
}

// 绘制卡片数字
context.font = "20px Georgia";
context.fillStyle = "#FFF";
context.textAlign = "center";
context.textBaseline = "middle";
for (var i = 0; i < 4; i++) {
	for (var j = 0; j < 4; j++) {
		// 若卡片数字为0, 则不绘制
		if (data[i][j] == 0) continue;
		context.fillText(data[i][j], 15+37.5 + 85*j, 15+37.5 + 85*i, 70);
	}
}
