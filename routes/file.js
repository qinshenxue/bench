exports.upload = function (req, res) {
    /**
    {
        fieldname: 'file',
        originalname: 'TIM截图20180305100533.png',
        encoding: '7bit',
        mimetype: 'image/png',
        destination: './upload/',
        filename: 'TIM截图20180305100533_1553043918707.png',
        path: 'upload\\TIM截图20180305100533_1553043918707.png',
        size: 36028
    }
    
     */

    if (req.file) {
        res.json({
            success: 1,
            data: {
                fileName: req.file.filename,
                url: '/upload/' + req.file.filename
            }
        })
    }
}