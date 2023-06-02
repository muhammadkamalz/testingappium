describe('Tes login tanpa username / password', () => {
    it ('Tanpa username & gagal login', async () => {
        //data buka halaman login
        const tombolbar = $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')
        const kliklogin = $('//android.view.ViewGroup[@content-desc="menu item log in"]')
        const submit = $('//android.view.ViewGroup[@content-desc="Login button"]')
        const cekusername = $('//android.view.ViewGroup[@content-desc="Username-error-message"]/android.widget.TextView')

        //proses login
        await tombolbar.click()
        await browser.pause(1000)
        await kliklogin.click()
        await browser.pause(1000)
        await submit.click()
        await browser.pause(1000)
        await expect(cekusername).toBeExisting()
        await browser.pause(1000)
    })
    it('Tanpa password & gagal login', async () => {
        //data untuk cek error password
        const username = $('//android.widget.EditText[@content-desc="Username input field"]') 
        const cekpassword = $('//android.view.ViewGroup[@content-desc="Password-error-message"]/android.widget.TextView')
        const submit = $('//android.view.ViewGroup[@content-desc="Login button"]')

        //proses cek error password
        await username.setValue('ddos')
        await browser.pause(1000)
        await submit.click()
        await browser.pause(1000)
        await expect(cekpassword).toBeExisting()
        await browser.pause(1000)
    })
    it('Login dengan username & password yg salah', async () => {
        
        //data untuk login gagal
        const password = $('~Password input field')
        const submit = $('//android.view.ViewGroup[@content-desc="Login button"]')
        const errormsg = $('//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView')

        //proses gagallogin
        await password.setValue('404')
        await browser.pause(1000)
        await submit.click()
        await browser.pause(1000)
        await expect(errormsg).toBeExisting()
    })
})