import React from 'react'
import './footer.css'
export default function Footer() {
    return (
        <>

            <div className='footer'>
                <div className="foots">
                    <div className='foot'>
                        <p><a href="">Home</a></p>
                        <p><a href="">Our misson</a></p>
                    </div>
                    <div className='foot'>
                        <p><a href="">Contact Us</a></p>
                        <p><a href="">About Us</a></p>
                    </div>

                    <div className="social">
                        <div className='media'><a href=""><i class="fa-brands fa-square-youtube"></i> YouTube</a></div>
                        <div className='media'><a href=""><i class="fa-brands fa-instagram"></i> Instagram</a></div>
                        <div className='media'><a href=""><i class="fa-brands fa-telegram"></i> Telegram</a></div>
                        <div className='media'><a href=""><i class="fa-brands fa-facebook"></i> FaceBook</a></div>
                    </div>
                </div>
                <div className="compright">
                    <p>Scholarships in KSA NotJustMadinah.com 2023. All rights reserved.</p>
                </div>
            </div>

        </>


    )
}
