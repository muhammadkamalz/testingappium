describe ('Proses Login', () => {
    it('Berhasil Buka halaman login dan login', async() => {

        // tombol untuk buka halaman login
        const tombolbar = $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')
        const sidebar = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]')
        const kliklogin = $('//android.view.ViewGroup[@content-desc="menu item log in"]')
        const ceklogin = $('//android.view.ViewGroup[@content-desc="login screen"]/android.widget.ScrollView/android.view.ViewGroup')

        //login

        const username = $('//android.widget.EditText[@content-desc="Username input field"]') 
        const password = $('~Password input field')
        const submit = $('//android.view.ViewGroup[@content-desc="Login button"]')
        const ceklogined = $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')

        
        
        await tombolbar.click()
        await browser.pause(1000)
        await expect(sidebar).toBeExisting()

        await kliklogin.click()
        await browser.pause(1000)
        await expect(ceklogin).toBeExisting()


        await username.setValue('bob@example.com')
        await browser.pause(1000)
        await password.setValue('10203040')
        await browser.pause(1000)
        await submit.click()
        await expect (ceklogined).toHaveTextContaining('Product')
    })
})
describe('logout', () => {
    it.skip('Berhasil Logout', async() => {
        const tombolbar = $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')
        const logout = $('~menu item log out')
        const lanjutlogout = $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2]')
        const sukseslogout = $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView')
        const logoutbox = $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout')

        await tombolbar.click()
        await browser.pause(1000)
        await browser.touchAction([
            { action: 'press', x: 208, y: 1026 },
            {action: 'wait', ms:1000},
            { action: 'moveTo', x: 208, y: 254 },
            'release'
        ])
        await browser.pause(1000)
        await logout.click()
        await browser.pause(1000)
        await expect(logoutbox).toBeExisting()
        await browser.pause(1000)
        await lanjutlogout.click()
        await browser.pause(1000)
        await expect(sukseslogout).toHaveTextContaining('You are successfully logged out.')
    })
})
describe('Input barang ke keranjang', () => {
    it('Berhasil dimasukkan', async() => {
        //data yang ingin diverif dan di klik
        const item1 = await $('(//android.view.ViewGroup[@content-desc="store item"])[1]')
        const tambah = await $('~Add To Cart button')
        const keranjang = await $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView')
        const halkeranjang = await $('~cart screen')
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

        await expect(halkeranjang).toBeExisting()
    })
})

describe('Checkout', () => {
    it('Berhasil isi data shipment', async() => {
        //data dan button untuk checkout
        const lanjutchekout = $('~Proceed To Checkout button')
        const cekcheckout = $('~checkout address screen')
        const namalengkap = $('//android.widget.EditText[@content-desc="Full Name* input field"]')
        const alamat1 = $('//android.widget.EditText[@content-desc="Address Line 1* input field"]')
        const kota = $('//android.widget.EditText[@content-desc="City* input field"]')
        const kodepost = $('//android.widget.EditText[@content-desc="Zip Code* input field"]')
        const negara = $('//android.widget.EditText[@content-desc="Country* input field"]')
        const selesaicheckout =$('~To Payment button')
        const halamanpembayaran =$('~checkout payment screen')

        //proses checkout
        await lanjutchekout.click()
        await browser.pause(1000)
        await expect(cekcheckout).toBeExisting()
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
        await expect(halamanpembayaran).toBeExisting()
        await browser.pause(1000)
    })

    it('Berhasil selesai checkout', async() => {
        const fullname = $('//android.widget.EditText[@content-desc="Full Name* input field"]')
        const nokredit = $('~Card Number* input field')
        const masaberlaku = $('~Expiration Date* input field')
        const kodekeamanan = $('~Security Code* input field')
        const review = $('~Review Order button')
        const halreview = $('~checkout review order screen')
        const cekitem = $('~product label')
        const cektotal = $('~checkout footer')
        const selesaicheckout =$('~Place Order button')
        const selesaisemua = $('//android.view.ViewGroup[@content-desc="checkout complete screen"]/android.widget.ScrollView/android.view.ViewGroup')
        const cekcheckoutnya = $('//android.view.ViewGroup[@content-desc="checkout complete screen"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]')

        await fullname.setValue('Rebecca Chambers')
        await browser.pause(500)
        await browser.touchAction([
            { action: 'press', x: 348, y: 909 },
            {action: 'wait', ms:1000},
            { action: 'moveTo', x: 348, y: 248 },
            'release'
        ])
        await browser.pause(500)
        await nokredit.setValue('409723185555123')
        await browser.pause(500)
        await masaberlaku.setValue('08/27')
        await browser.pause(500)
        await kodekeamanan.setValue(917)
        await browser.pause(500)
        await review.click()
        await browser.pause(500)
        await expect(halreview).toBeExisting()
        await browser.pause(500)
        await expect(cekitem).toBeExisting()
        await browser.pause(500)
        await expect(cektotal).toBeExisting()
        await browser.pause(500)
        await selesaicheckout.click()
        await browser.pause(500)
        await expect(selesaisemua).toBeExisting()
        await browser.pause(500)
        await expect(cekcheckoutnya).toHaveTextContaining('Checkout Complete')
    })
})