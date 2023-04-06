import * as FileSystem from 'expo-file-system'
export const ADD_PHOTO = 'ADD_PHOTO'

export const addPhoto = (image) => {
    
    return async dispatch => {
        const fileName = image.split('/').pop()
        
        const Path = FileSystem.documentDirectory + fileName
        
        try{
          
            FileSystem.moveAsync({
                from: image,
                to: Path,
            })
            
        }catch(err){
            console.log(err.message)
            throw err;
        }
        dispatch({type: ADD_PHOTO, payload:{image: Path}})
    }
}

