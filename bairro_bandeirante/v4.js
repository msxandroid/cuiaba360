PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"key": "",
"control": {
        "mousemode": "drag",
        "touchmode": "drag"
    },
"data": {
        "id": "globalData",
        "messageBoxStyle": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66);"
    },
"include": [
        {
            "src": "v4_controls.js"
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
	"id": "v4",
	"image":{"baseindex":1,"bitmap":[{"back":{"src":"v4_tiles/v4_t_1b_%y_%x.jpg"},"down":{"src":"v4_tiles/v4_t_1d_%y_%x.jpg"},"front":{"src":"v4_tiles/v4_t_1f_%y_%x.jpg"},"height":1573,"left":{"src":"v4_tiles/v4_t_1l_%y_%x.jpg"},"right":{"src":"v4_tiles/v4_t_1r_%y_%x.jpg"},"tilesize":480,"up":{"src":"v4_tiles/v4_t_1u_%y_%x.jpg"},"width":1573},{"back":{"src":"v4_tiles/v4_t_2b_%y_%x.jpg"},"down":{"src":"v4_tiles/v4_t_2d_%y_%x.jpg"},"front":{"src":"v4_tiles/v4_t_2f_%y_%x.jpg"},"height":787,"left":{"src":"v4_tiles/v4_t_2l_%y_%x.jpg"},"right":{"src":"v4_tiles/v4_t_2r_%y_%x.jpg"},"tilesize":480,"up":{"src":"v4_tiles/v4_t_2u_%y_%x.jpg"},"width":787},{"back":{"src":"v4_tiles/v4_t_3b_%y_%x.jpg"},"down":{"src":"v4_tiles/v4_t_3d_%y_%x.jpg"},"front":{"src":"v4_tiles/v4_t_3f_%y_%x.jpg"},"height":394,"left":{"src":"v4_tiles/v4_t_3l_%y_%x.jpg"},"right":{"src":"v4_tiles/v4_t_3r_%y_%x.jpg"},"tilesize":480,"up":{"src":"v4_tiles/v4_t_3u_%y_%x.jpg"},"width":394}],"multilevel":true,"preview":{"src":"v4_tiles/v4_preview.jpg"},"projection":"cubic"},
	"view": {
	        "hfov": 90,
	        "pan": 180,
	        "tilt": 0
	    }
},
"version": "4.2"
}
}