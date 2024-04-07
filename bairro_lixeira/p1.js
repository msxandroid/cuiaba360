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
            "src": "p1_controls.js"
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
	"id": "p1",
	"image":{"baseindex":1,"bitmap":[{"back":{"src":"p1_tiles/p1_t_1b_%y_%x.jpg"},"down":{"src":"p1_tiles/p1_t_1d_%y_%x.jpg"},"front":{"src":"p1_tiles/p1_t_1f_%y_%x.jpg"},"height":3583,"left":{"src":"p1_tiles/p1_t_1l_%y_%x.jpg"},"right":{"src":"p1_tiles/p1_t_1r_%y_%x.jpg"},"tilesize":480,"up":{"src":"p1_tiles/p1_t_1u_%y_%x.jpg"},"width":3583},{"back":{"src":"p1_tiles/p1_t_2b_%y_%x.jpg"},"down":{"src":"p1_tiles/p1_t_2d_%y_%x.jpg"},"front":{"src":"p1_tiles/p1_t_2f_%y_%x.jpg"},"height":1792,"left":{"src":"p1_tiles/p1_t_2l_%y_%x.jpg"},"right":{"src":"p1_tiles/p1_t_2r_%y_%x.jpg"},"tilesize":480,"up":{"src":"p1_tiles/p1_t_2u_%y_%x.jpg"},"width":1792},{"back":{"src":"p1_tiles/p1_t_3b_%y_%x.jpg"},"down":{"src":"p1_tiles/p1_t_3d_%y_%x.jpg"},"front":{"src":"p1_tiles/p1_t_3f_%y_%x.jpg"},"height":896,"left":{"src":"p1_tiles/p1_t_3l_%y_%x.jpg"},"right":{"src":"p1_tiles/p1_t_3r_%y_%x.jpg"},"tilesize":480,"up":{"src":"p1_tiles/p1_t_3u_%y_%x.jpg"},"width":896},{"back":{"src":"p1_tiles/p1_t_4b_%y_%x.jpg"},"down":{"src":"p1_tiles/p1_t_4d_%y_%x.jpg"},"front":{"src":"p1_tiles/p1_t_4f_%y_%x.jpg"},"height":448,"left":{"src":"p1_tiles/p1_t_4l_%y_%x.jpg"},"right":{"src":"p1_tiles/p1_t_4r_%y_%x.jpg"},"tilesize":480,"up":{"src":"p1_tiles/p1_t_4u_%y_%x.jpg"},"width":448}],"multilevel":true,"preview":{"src":"p1_tiles/p1_preview.jpg"},"projection":"cubic"},
	"view": {
	        "hfov": 90,
	        "pan": 180,
	        "tilt": 0
	    }
},
"version": "4.2"
}
}