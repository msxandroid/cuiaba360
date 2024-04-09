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
            "src": "v6_controls.js"
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
	"id": "v6",
	"image":{"baseindex":1,"bitmap":[{"back":{"src":"v6_tiles/v6_t_1b_%y_%x.jpg"},"down":{"src":"v6_tiles/v6_t_1d_%y_%x.jpg"},"front":{"src":"v6_tiles/v6_t_1f_%y_%x.jpg"},"height":1515,"left":{"src":"v6_tiles/v6_t_1l_%y_%x.jpg"},"right":{"src":"v6_tiles/v6_t_1r_%y_%x.jpg"},"tilesize":480,"up":{"src":"v6_tiles/v6_t_1u_%y_%x.jpg"},"width":1515},{"back":{"src":"v6_tiles/v6_t_2b_%y_%x.jpg"},"down":{"src":"v6_tiles/v6_t_2d_%y_%x.jpg"},"front":{"src":"v6_tiles/v6_t_2f_%y_%x.jpg"},"height":758,"left":{"src":"v6_tiles/v6_t_2l_%y_%x.jpg"},"right":{"src":"v6_tiles/v6_t_2r_%y_%x.jpg"},"tilesize":480,"up":{"src":"v6_tiles/v6_t_2u_%y_%x.jpg"},"width":758},{"back":{"src":"v6_tiles/v6_t_3b_%y_%x.jpg"},"down":{"src":"v6_tiles/v6_t_3d_%y_%x.jpg"},"front":{"src":"v6_tiles/v6_t_3f_%y_%x.jpg"},"height":379,"left":{"src":"v6_tiles/v6_t_3l_%y_%x.jpg"},"right":{"src":"v6_tiles/v6_t_3r_%y_%x.jpg"},"tilesize":480,"up":{"src":"v6_tiles/v6_t_3u_%y_%x.jpg"},"width":379}],"multilevel":true,"preview":{"src":"v6_tiles/v6_preview.jpg"},"projection":"cubic"},
	"view": {
	        "hfov": 90,
	        "pan": 180,
	        "tilt": 0
	    }
},
"version": "4.2"
}
}