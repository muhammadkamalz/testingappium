describe('Tes Payment tanpa menginputkan info', () => {
    it('Muncul notifikasi error untuk tiap input', async() => {
        //data input item

        const item1 = await $('(//android.view.ViewGroup[@content-desc="store item"])[1]')
        const tambah = await $('~Add To Cart button')
        const keranjang = await $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView')
        const lanjutchekout = $('~Proceed To Checkout button')
        //data login

        const username = $('//android.widget.EditText[@content-desc="Username input field"]') 
        const password = $('~Password input field')
        const submit = $('//android.view.ViewGroup[@content-desc="Login button"]')

        //data tes checkout
        const selesaicheckout =$('~To Payment button')
        const namalengkap = $('//android.widget.EditText[@content-desc="Full Name* input field"]')
        const alamat1 = $('//android.widget.EditText[@content-desc="Address Line 1* input field"]')
        const kota = $('//android.widget.EditText[@content-desc="City* input field"]')
        const kodepost = $('//android.widget.EditText[@content-desc="Zip Code* input field"]')
        const negara = $('//android.widget.EditText[@content-desc="Country* input field"]')
        
        //data tes error payment
        const review = $('~Review Order button')
        const errornama = $('//android.view.ViewGroup[@content-desc="Full Name*-error-message"]/android.widget.TextView')
        const errorcardnumber = $('//android.view.ViewGroup[@content-desc="Card Number*-error-message"]/android.widget.TextView')
        const errortanggal = $('//android.view.ViewGroup[@content-desc="Expiration Date*-error-message"]/android.widget.TextView')
        const errorkeamanan = $('//android.view.ViewGroup[@content-desc="Security Code*-error-message"]/android.widget.TextView')


        //proses input barang
        await item1.click()
        await browser.pause(1000)
        await browser.touchAction([
            { action: 'press', x: 348, y: 1136 },
            {action: 'wait', ms:1000},
            { action: 'moveTo', x: 348, y: 202 },
            'release'
        ])
        await browser.pause(1000)
        await tambah.click()

        //proses cek hal keranjang terbuka atau tidak
        await browser.pause(1000)
        await keranjang.click()
        await browser.pause(1000)

        await lanjutchekout.click()
        await browser.pause(1000)

        await username.setValue('bob@example.com')
        await browser.pause(1000)
        await password.setValue('10203040')
        await browser.pause(1000)
        await submit.click()

        await browser.pause(1000)
        await namalengkap.setValue('Rebecca Chambers')
        await browser.pause(1000)
        await alamat1.setValue('13rd Elm Street')
        await browser.pause(1000)
        await browser.touchAction([
            { action: 'press', x: 348, y: 909 },
            {action: 'wait', ms:1000},
            { action: 'moveTo', x: 348, y: 248 },
            'release'
        ])

        await kota.setValue('New York')
        await browser.pause(1000)
        await kodepost.setValue('20714')
        await browser.pause(1000)
        await negara.setValue('U.S')
        await browser.pause(1000)
        await selesaicheckout.click()
        await browser.pause(1000)

        //proses cek payment tanpa input
        await review.click()
        await browser.pause(500)
        await browser.touchAction([
            { action: 'press', x: 375, y: 938 },
            {action: 'wait', ms:1000},
            { action: 'moveTo', x: 375, y: 360 },
            'release'
        ])
        await browser.pause(500)
        await expect(errornama).toBeExisting()
        await browser.pause(500)
        await expect(errorcardnumber).toBeExisting()
        await browser.pause(500)
        await expect(errortanggal).toBeExisting()
        await browser.pause(500)
        await expect(errorkeamanan).toBeExisting()
    })
})