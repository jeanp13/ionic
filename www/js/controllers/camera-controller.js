angular.module('starter').controller('CameraCtrl', function($scope, $cordovaCamera, $cordovaDevice, $http) {

//        $scope.pictureUrl = 'http://placehold.it/300x300';
     
    
    $scope.placas = [];
    
    $scope.pictureUrl='http://placehold.it/300x300';
    
    $scope.takePhoto = function () {
        var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
//            targetWidth: 264,
//            targetHeight: 20,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            correctOrientation:true
        };

//        $cordovaCamera.getPicture(options)
//            .then(function (data) {
//                $scope.pictureUrl = 'data:image/jpeg;base64,' + data;
//            }, function (error) {
//                console.log('erro: ' + error);
//        });
//        };

//    
//    $scope.takePhoto() = function (){
//      console.log('teste');
//          var options = {
//              quality: 50,
//              destinationType: Camera.DestinationType.DATA_URL,
//              sourceType: Camera.PictureSourceType.CAMERA,
//              allowEdit: true,
//              encodingType: Camera.EncodingType.JPEG,
//              targetWidth: 100,
//              targetHeight: 100,
//              popoverOptions: CameraPopoverOptions,
//              saveToPhotoAlbum: false,
//              correctOrientation:true
//        };
//
        $cordovaCamera.getPicture(options)
            .then(function(imageData) {
              //var image = document.getElementById('myImage');
              $scope.pictureUrl = "data:image/jpeg;base64," + imageData;

                //$scope.pictureUrl=image;
            
        });
        
    };
    
    $scope.sendPhoto = function (){
         var uuid = '2222';
        document.addEventListener("deviceready", function () {
           uuid = $cordovaDevice.getUUID();
          }, false);
                      
        var d = new Date();

        var n = d.getFullYear()
                    + '_' + d.getMonth()
                    + '_' + d.getDate()
                    + '_' + d.getHours()
                    + '_' + d.getMinutes()
                    + '_' + d.getSeconds()
                    + '_' + d.getMilliseconds();
        var fileName = uuid + '_' + n + '.jpeg' ;

//        $scope.pictureUrl = resizeCrop($scope.pictureUrl,10,10);
        
        $scope.imagem = {
            'imeiOrigem':uuid,
            'imagemCompleta':$scope.pictureUrl,
            'nomeImagem':fileName,
            'letraUm':'nomeImagem',
            'letraDois':'nomeImagem',
            'letraTres':'nomeImagem',
            'numeroUm':'nomeImagem',
            'numeroDois':'nomeImagem',
            'numeroTres':'nomeImagem',
            'numeroQuatro':'nomeImagem',
            'dataImagem':d  
        };

        //$http.get('localhost:3000/obterImagem');
        //$http.get('http://192.168.25.38:3000/obterImagem');
        $http.post('http://192.168.25.38:3000/obterImagem',$scope.imagem);
         
        

         }
        //, function(err) {
              // error
        //}
                                     ;
    
    
    
    function resizeCrop( src, width, height ){
        var crop = width == 0 || height == 0;
        // not resize
        if(src.width && width && height == 0){
            height = src.height * (width / src.width);
        }

        // check scale
        var xscale = width  / src.width;
        var yscale = height / src.height;
        var scale  = crop ? Math.min(xscale, yscale) : Math.max(xscale, yscale);
        // create empty canvas
        var canvas = document.createElement("canvas");                  
        canvas.width  = width ? width   : Math.round(src.width  * scale);
        canvas.height = height ? height : Math.round(src.height * scale);
        canvas.getContext("2d").scale(scale,scale);
        // crop it top center
        canvas.getContext("2d").drawImage(src, ((src.width * scale) - canvas.width) * -.5 , ((src.height * scale) - canvas.height) * -.5 );
        return canvas;
    };
//    
//    $jrCrop.crop({
//        url: url,
//        width: 200,
//        height: 200
//    }).then(function(canvas) {
//        // success!
//        var image = canvas.toDataURL();
//    }, function() {
//        // User canceled or couldn't load image.
//    });
//    
    
});