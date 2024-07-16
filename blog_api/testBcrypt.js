const bcrypt = require('bcrypt');

async function testBcrypt() {
    try {
        const password = 'testPassword';
        const saltRounds = 10;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log('Hashed Password:', hashedPassword);

        // Verify the password
        const match = await bcrypt.compare(password, hashedPassword);
        if (match) {
            console.log('Password verification successful!');
        } else {
            console.log('Password verification failed.');
        }
    } catch (error) {
        console.error('Error during bcrypt operations:', error);
    }
}

testBcrypt();
