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
            "src": "v2_controls.js"
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
	"id": "v2",
	"image":{"baseindex":1,"bitmap":[{"back":{"src":"v2_tiles/v2_t_1b_%y_%x.jpg"},"down":{"src":"v2_tiles/v2_t_1d_%y_%x.jpg"},"front":{"src":"v2_tiles/v2_t_1f_%y_%x.jpg"},"height":1511,"left":{"src":"v2_tiles/v2_t_1l_%y_%x.jpg"},"right":{"src":"v2_tiles/v2_t_1r_%y_%x.jpg"},"tilesize":480,"up":{"src":"v2_tiles/v2_t_1u_%y_%x.jpg"},"width":1511},{"back":{"src":"v2_tiles/v2_t_2b_%y_%x.jpg"},"down":{"src":"v2_tiles/v2_t_2d_%y_%x.jpg"},"front":{"src":"v2_tiles/v2_t_2f_%y_%x.jpg"},"height":756,"left":{"src":"v2_tiles/v2_t_2l_%y_%x.jpg"},"right":{"src":"v2_tiles/v2_t_2r_%y_%x.jpg"},"tilesize":480,"up":{"src":"v2_tiles/v2_t_2u_%y_%x.jpg"},"width":756},{"back":{"src":"v2_tiles/v2_t_3b_%y_%x.jpg"},"down":{"src":"v2_tiles/v2_t_3d_%y_%x.jpg"},"front":{"src":"v2_tiles/v2_t_3f_%y_%x.jpg"},"height":378,"left":{"src":"v2_tiles/v2_t_3l_%y_%x.jpg"},"right":{"src":"v2_tiles/v2_t_3r_%y_%x.jpg"},"tilesize":480,"up":{"src":"v2_tiles/v2_t_3u_%y_%x.jpg"},"width":378}],"multilevel":true,"preview":{"src":"v2_tiles/v2_preview.jpg"},"projection":"cubic"},
	"view": {
	        "hfov": 90,
	        "pan": 180,
	        "tilt": 0
	    }
},
"version": "4.2"
}
}