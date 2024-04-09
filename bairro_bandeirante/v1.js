PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"key": "",
"control": {
        "enablevrcontroller": true,
        "mousemode": "drag",
        "touchmode": "drag",
        "vrdisplay": "auto"
    },
"data": {
        "id": "globalData",
        "messageBoxStyle": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66);"
    },
"include": [
        {
            "src": "v1_controls.js"
        },
        {
            "src": "panoStudioViewerGallery.js"
        }
    ],
"node": {
	"autoplay": {
	        "pan": 0.08,
	        "reference": "screen",
	        "restart": 5,
	        "returnToLevel": true,
	        "status": "off",
	        "tilt": 0,
	        "zoom": 1
	    },
	"camera": {
	        "maxpan": 360,
	        "maxtilt": 90,
	        "minpan": 0,
	        "mintilt": -90
	    },
	"id": "v1",
	"image":{"baseindex":1,"bitmap":[{"back":{"src":"v1_tiles/v1_t_1b_%y_%x.jpg"},"down":{"src":"v1_tiles/v1_t_1d_%y_%x.jpg"},"front":{"src":"v1_tiles/v1_t_1f_%y_%x.jpg"},"height":1741,"left":{"src":"v1_tiles/v1_t_1l_%y_%x.jpg"},"right":{"src":"v1_tiles/v1_t_1r_%y_%x.jpg"},"tilesize":480,"up":{"src":"v1_tiles/v1_t_1u_%y_%x.jpg"},"width":1741},{"back":{"src":"v1_tiles/v1_t_2b_%y_%x.jpg"},"down":{"src":"v1_tiles/v1_t_2d_%y_%x.jpg"},"front":{"src":"v1_tiles/v1_t_2f_%y_%x.jpg"},"height":871,"left":{"src":"v1_tiles/v1_t_2l_%y_%x.jpg"},"right":{"src":"v1_tiles/v1_t_2r_%y_%x.jpg"},"tilesize":480,"up":{"src":"v1_tiles/v1_t_2u_%y_%x.jpg"},"width":871},{"back":{"src":"v1_tiles/v1_t_3b_%y_%x.jpg"},"down":{"src":"v1_tiles/v1_t_3d_%y_%x.jpg"},"front":{"src":"v1_tiles/v1_t_3f_%y_%x.jpg"},"height":436,"left":{"src":"v1_tiles/v1_t_3l_%y_%x.jpg"},"right":{"src":"v1_tiles/v1_t_3r_%y_%x.jpg"},"tilesize":480,"up":{"src":"v1_tiles/v1_t_3u_%y_%x.jpg"},"width":436}],"multilevel":true,"preview":{"src":"v1_tiles/v1_preview.jpg"},"projection":"cubic"},
	"textbox": [
	        {
	            "align": "top",
	            "style": " color:#ffffff; font-family: Arial,Helvetica,sans-serif; text-shadow: 0px 0px 3.8px #000000, 0px 0px 2.5px #000000, 0px 0px 1.7px #000000; font-size: 12px; font-weight: bold; text-align:center;",
	            "text": "Monumento Aos Bandeirantes",
	            "yoff": "4px"
	        }
	    ],
	"view": {
	        "hfov": 90,
	        "pan": 180,
	        "tilt": 0
	    }
},
"version": "4.2"
}
}