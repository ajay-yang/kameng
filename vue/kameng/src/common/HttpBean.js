import axios from 'axios';

export function httpPost(url,form,recall){
	axios.post(url,$(form).serialize())
    .then(function(res){
        //console.log(res);
        recall(null,res.data);
    })
    .catch(function(err){
        console.log(err);
        recall(err,null);
    })
}

export function httpGet(url,form,recall){
	axios.get(url,form)
    .then(function(res){
        //console.log(res);
        recall(null,res.data);
    })
    .catch(function(err){
        console.log(err);
        recall(err,null);
    })
}

export function httpPostSerialize(url,form,recall){
	axios.post(url,new FormData($(form)[0]),{headers: {'Content-Type': 'multipart/form-data'}})
    .then(function(res){
        //console.log(res);
        recall(null,res.data);
    })
    .catch(function(err){
        console.log(err);
        recall(err,null);
    })
}