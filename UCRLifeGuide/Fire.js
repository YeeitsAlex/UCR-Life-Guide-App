import FirebaseKeys from './config';
import firebase from 'firebase';

// require('firebase/firstore')
class Fire{
    constructor(){
        if (!firebase.apps.length) {
            firebase.initializeApp(FirebaseKeys);
        }
    }

    addPost = async ({text}) => {
        // const remoteUri = await this.uploadPhoto(localUri)
        
        return new Promise((res,rej) => {
            this.firestore
                .collection("posts")
                .add({
                    text,
                    uid: this.uid,
                    displayName: this.displayName,
                    // timestamp: this.timestamp,
                    timestamp: Date(this.timestamp)
                    // email: this.email,
                    // image: remoteUri
            })
            .then(ref => {
                res(ref);
            })
            .catch(error => {
                rej(error);
            });
        });
    };

    // getPosts = async () =>{
    //     let ref = this.collection.orderBy('timestamp');
    //     try{
    //         const querySnapshot = await ref.get();
    //         const postsList = [];
    //         querySnapshot.forEach(function(doc){
    //             if(doc.exists){
    //                 const postData = doc.data();
    //                 // console.log(doc.data());
    //                 const userName = postData.displayName;
    //                 // console.log(userName);
    //                 const userText = postData.text;
    //                 // console.log(userText);
    //                 const postTimeStamp = postData.timestamp;
    //                 // console.log(postTimeStamp);
    //                 // console.log(user);
    //                 const tempPostArray = {
    //                     id: doc.id,
    //                     displayName: userName,
    //                     text: userText,
    //                     timestamp: postTimeStamp
    //                 };
    //                 console.log("Trying to push");
    //                 postsList.push(tempPostArray);
    //                 console.log(postsList);
    //                 console.log("push successful");
    //             }
    //         });
    //         // console.log(postsList[1]);
    //         return{postsList};
    //     } catch({message}){
    //         alert(message);
    //     }
    // };


    get collection(){
        return firebase.firestore().collection('posts');
    }
    // uploadPhoto = async uri => {
    //     const path = `photos/${this.uid}/${Date.now()}.jpg`;
    //     return new Promise(async (res, rej) => {
    //         const response = await fetch(uri);
    //         const file = await response.blob();
    //         let upload = firebase
    //             .storage()
    //             .ref(path)
    //             .put(file);

    //         upload.on(
    //            "state_changed",
    //            snapshot => {},
    //            err => {
    //              rej(err)  
    //            },
    //            async () => {
    //                const url = await upload.snapshot.ref.getDownloadURL();
    //                res(url);
    //            } 
    //         );
    //     });
    // };

    get firestore(){
        return firebase.firestore()
    }

    get uid(){
        //user declared here and in other functions so we can error check to make sure there is a valid user
        var user = firebase.auth().currentUser;
        // return (firebase.auth().currentUser || {}).uid
        if(user != null){
            return (firebase.auth().currentUser).uid
        }
    }

    get displayName(){
        var user = firebase.auth().currentUser;
        if(user != null){
            return (firebase.auth().currentUser).displayName
        }
    }

    get email(){
        var user = firebase.auth().currentUser;
        if(user != null){
            return (firebase.auth().currentUser).email
        }
    }

    get timestamp(){
        return Date.now()
    }

}

Fire.shared = new Fire()
export default Fire;
