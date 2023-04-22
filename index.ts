import * as readlineSync from 'readline-sync'
import { HashTable } from './HashTable'

const length = readlineSync.question('Inserte el tamano de la tabla: ')
const hashSet = new HashTable(Number(length))

while (true) {
    const input = readlineSync.question('Inserte un elemento: ')
    if (input === 'exit') {
        break
    }
    hashSet.insert(input)

    console.table(hashSet.vector)
}