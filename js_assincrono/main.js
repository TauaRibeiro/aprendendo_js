
// const cbSucesso = (usuario) => {
//     getVideosUsuario(usuario.email, function (videos){
//         getDetalesVideo(videos[0], function(detalesVideo){
//             console.log({detalesVideo});
//         });
        
//         console.log(videos)
//     });
// }

// const cbErro = (erro) => {
//     console.log({erro});
// }

const getVideosUsuario = (email) => {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(["video1", "video2", "video3"]);
        }, 2000);
    });
}

const getDetalesVideo = (video) => {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({titulo: "Título do vídeo"})
        }, 2500);
    });
}


const promiseLoginUsuario = (email, senha)=>{
    return new Promise(function(resolve, reject){
        const erro = true;

        if(erro){
            return reject(new Error("Erro ao fazer login!"));
        }

        console.log("usuario logado!");
        resolve({ email })
    });
}

// Sem usar asynch e await
// promiseLoginUsuario("usuario@gmail.com", "1234")
// .then((usuario) =>{
//     console.log({ usuario })
//     return getVideosUsuario(usuario.email);
// })
// .then((videos) =>{
//     console.log(videos);
//     return getDetalesVideo(videos[0]);
// })
// .then((detalesVideo) => console.log({ detalesVideo }))
// .catch((erro) => console.log(erro));

// promise.all
const yt = new Promise(resolve => {
    setTimeout(()=>{
        resolve("videos do youtube")
    }, 2000);
});

const fb = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("posts do facebook")
    }, 3000);
});

//Promise.all([yt, fb]).then((resultado) => console.log({ resultado }));

const ExibirUsuario = async () => {
    try{

        const usuario = await promiseLoginUsuario("usuario@gmail.com","1234");
        const videos = await getVideosUsuario(usuario.email);
        const detales = await getDetalesVideo(videos[0]);
        
        console.log({ usuario });
        console.log({videos});
        console.log({detales});
    }catch(erro){
        console.log(erro);
    }
}

//ExibirUsuario();