/**
 * @index_properties
 * Index Properties biasanya digunakan jika kita ingin membuat sebuah objek tetapi kita belum menentukan nama propertinya 
 */
interface ErrorContainer {
    [props: string]: string 
}

const error: ErrorContainer = {
    email: 'Invalid Email'
}