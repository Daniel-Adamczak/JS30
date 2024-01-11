const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
        const p = document.querySelector('p');
        function makeGreen() {

            p.style.color = '#BADA55';
            p.style.fontSize = '50px';
        }

        // Regular
        console.log('regular')
        // Interpolated
        console.log('%s', 'Interpolated')
        // Styled
        console.log('%c Styled', 'font-size:15px; color:blue;')
        // warning!
        console.warn('Warning')
        // Error :|
        console.error('Error')
        // Info
        console.info('Info')
        // Testing
        console.assert(1 === 2, 'Failed Assertion')
        // clearing
        //console.clear()
        // Viewing DOM Elements
        console.dir(p)
        // Grouping together
        dogs.forEach(dog => {
            console.groupCollapsed(`${dog.name}`)
            console.log(`My name is ${dog.name}`)
            console.log(`I am ${dog.age} years old`)
            console.groupEnd(`${dog.name}`)
        })
        // counting
        console.count('counting')
        console.count('counting')
        console.count('counting')
        console.count('counting')
        console.count('counting')
        console.count('counting')
        // timing
        console.time('fetching data')
        fetch('https://api.github.com/users/wesbos').then(data => data.json()).then(data => { console.timeEnd('fetching data') })
        //table
        console.table(dogs)