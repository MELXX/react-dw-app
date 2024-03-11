import { BackBlazeConfig as a,endpoiints as ep } from '../environment'
export class bbImage{
    constructor(height, width) {
        this.height = height;
        this.width = width;
      }
}

/**
 * Download image from server using id.
 * 
 * @param {String} imageId - File identifier.
 * @param {String} bucketId - Cloud folder identifier.
 * @returns {bbImage}the image data
 */
export function downloadImage(imageId,bucketId){

}

/**
 * Authenticate with server.
 * @returns {Promise<Response>} The token
 */
export function getToken(){

    var url = a.authUrl + ep.authorize_account;
    var s = 'Basic ' + btoa(a.applicationKeyId + ":" + a.applicationKey)
    var header = new Headers({Authorization:s});
    console.log(header);
    return fetch(url,{headers: {'Authorization':s},mode: 'cors'});
}

/**
 * Get list of images from server using bucket id.
 * 
 * @param {String} bucketId - Cloud folder identifier.
 */
export function getImageList(bucketId){

}

