import RNFetchBlob from 'rn-fetch-blob'
 
export const pdfService = {
    downloadPdf: (url: string, path: string) => {
        let dirs = RNFetchBlob.fs.dirs
        RNFetchBlob
            .config({
                // response data will be saved to this path if it has access right.
                path: dirs.DownloadDir + path,
                fileCache: true,
                addAndroidDownloads: {
                    mediaScannable: true,
                    useDownloadManager: true,
                    notification: true,
                    title: path,
                    path: dirs.SDCardDir + path,
                    mime: 'application/pdf'
                }
            })
            .fetch('GET', url, {
                //some headers ..
            })
            .then((res) => {
                // the path should be dirs.DocumentDir + 'path-to-file.anything'
                console.log('The file saved to ', res.path())
            })
    }
}