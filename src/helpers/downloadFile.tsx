import { Filesystem } from "@capacitor/filesystem";
import { Share } from "@capacitor/share";
import { Directory } from "@capacitor/filesystem";
import { FileOpener, FileOpenerOptions } from '@capacitor-community/file-opener';


export async function downloadFile(title: string, base64Data: string) {
    
 
    // Salva il file nel file system usando base64
    await Filesystem.writeFile({
        path: title,
        data: base64Data,
        directory: Directory.Documents,
    });

    // Ottieni il percorso del file salvato
    const fileInfo = await Filesystem.getUri({
        path: title,
        directory: Directory.Documents
    });

    // Condividi il file usando il percorso corretto
    //await Share.share({ url: fileInfo.uri });

    const fileOpenerOptions: FileOpenerOptions = {
        filePath: fileInfo.uri,
        contentType: 'application/pdf',
        openWithDefault: true,
    };
    await FileOpener.open(fileOpenerOptions);
    

}