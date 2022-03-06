// ! Type Casting

const input = document.getElementById('user-input')

if(input){
    /**
     * @HTMLInputElement
     * adalah type casting
     * karena tidak semua element html memiliki properti value
     */
    (input as HTMLInputElement).value = 'Hello'
}
