function Map() {
    return (  
        <>
       <div className="flex items-center justify-center">
  <iframe
    className="m-5 rounded-3xl"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.3283069053537!2d77.28464897549703!3d28.529850075720994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce74b82722239%3A0xa9b043b330ccbe55!2sRolls-Royce%20New%20Delhi!5e0!3m2!1sen!2sin!4v1715357558186!5m2!1sen!2sin"
    width={900}
    height={350}
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

        </>
    );
}

export default Map;