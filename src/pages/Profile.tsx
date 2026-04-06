import React from 'react';
import { useNavigate } from 'react-router-dom';

// 1. IMÁGENES
import fotoPerfil from '../assets/perfil.jpeg';
import portadaDia from '../assets/portada1.jpeg';
import portadaNoche from '../assets/portada2.jpeg';

const Profile = () => {
  const navigate = useNavigate();

  // (Los "clics" invisibles) 
  const profileInputRef = React.useRef<HTMLInputElement>(null); 
  const storyInputRef = React.useRef<HTMLInputElement>(null);   
  const galleryInputRef = React.useRef<HTMLInputElement>(null);

  //  ESTADOS ( memoria) 
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [bioText, setBioText] = React.useState("");
  const [profileImage, setProfileImage] = React.useState(fotoPerfil); 
  const [storyImage, setStoryImage] = React.useState<string | null>(null); 
  const [userPhotos, setUserPhotos] = React.useState<string[]>([]); // La lista de la galería

  // 2. DATOS DEL USUARIO
  const userData = {
    name: "Isabella",
    role: "Frontend Developer",
    location: "Medellín, Colombia",
    work: "Éxito",
    education: "Contaduría",
    bio: "¡Hola! soy isabel y quiero muchos amigos de mi universidad",
  };

  return (
    <div style={{...styles.container, backgroundColor: isDarkMode ? '#18191a' : '#F0F2F5'}}>
      <div style={styles.mainContent}>
        
        {/* CABECERA */}
        <div style={{...styles.headerCard, backgroundColor: isDarkMode ? '#242526' : '#fff'}}>
          <img src={isDarkMode ? portadaNoche : portadaDia} alt="Cover" style={styles.coverPhoto} />
          
          <div style={styles.avatarWrapper} onClick={() => profileInputRef.current?.click()}>
            <img 
              src={profileImage} 
              alt="Profile" 
              style={{...styles.profilePic, cursor: 'pointer'}} 
            />
          </div>
          
          <h1 style={{...styles.userName, color: isDarkMode ? '#fff' : '#000'}}>{userData.name}</h1>
          <p style={styles.userRole}>{userData.role}</p>
        
          <div style={styles.buttonGroup}>
            <button style={styles.btnBlue} onClick={() => storyInputRef.current?.click()}>
              + Agregar a historia
            </button>
            
            <button style={styles.btnGray} onClick={() => setShowModal(true)}>
              ✎ Editar biografía
            </button>

            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              style={{...styles.btnGray, backgroundColor: isDarkMode ? '#444' : '#E4E6EB', color: isDarkMode ? '#fff' : '#000'}}
            >
              {isDarkMode ? '☀️ Día' : '🌙 Noche'}
            </button>

            <button onClick={() => navigate('/home')} style={styles.btnGray}>🏠 Inicio</button>
          </div>
        </div>

        {/*  PERFIL */}
        <div style={styles.contentGrid}>
          {/* Column Izquierda */}
          <div style={styles.leftColumn}>
            <div style={{...styles.card, backgroundColor: isDarkMode ? '#242526' : '#fff'}}>
              <h3 style={{...styles.cardTitle, color: isDarkMode ? '#fff' : '#000'}}>Presentación</h3>
              <p style={{...styles.bioText, color: isDarkMode ? '#b0b3b8' : '#050505'}}>
                {bioText || userData.bio}
              </p>
              <div style={{...styles.infoList, borderTopColor: isDarkMode ? '#3e4042' : '#ebedf0'}}>
                <div style={{...styles.infoItem, color: isDarkMode ? '#e4e6eb' : '#1c1e21'}}>💼 Trabaja en <b>{userData.work}</b></div>
                <div style={{...styles.infoItem, color: isDarkMode ? '#e4e6eb' : '#1c1e21'}}>🎓 Estudió en <b>{userData.education}</b></div>
                <div style={{...styles.infoItem, color: isDarkMode ? '#e4e6eb' : '#1c1e21'}}>📍 Vive en <b>{userData.location}</b></div>
              </div>
            </div>
          </div>

          {/* Column Derecha */}
          <div style={styles.rightColumn}>
            
            {/* 1. SECCIÓN DE HISTORIA */}
            <div style={{...styles.card, marginBottom: '16px', backgroundColor: isDarkMode ? '#242526' : '#fff'}}>
              <h3 style={{...styles.cardTitle, color: isDarkMode ? '#fff' : '#000'}}>Historia</h3>
              {storyImage ? (
                <img src={storyImage} alt="Historia" style={{ width: '120px', height: '200px', borderRadius: '8px', objectFit: 'cover' }} />
              ) : (
                <p style={{color: '#65676b', fontSize: '14px'}}>No hay historias recientes.</p>
              )}
            </div>

            {/* 2. SECCIÓN DE GALERÍA */}
            <div style={{...styles.card, backgroundColor: isDarkMode ? '#242526' : '#fff'}}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3 style={{...styles.cardTitle, color: isDarkMode ? '#fff' : '#000', margin: 0 }}>Galería</h3>
                <button 
                  onClick={() => galleryInputRef.current?.click()}
                  style={{ ...styles.btnGray, fontSize: '12px', padding: '5px 10px' }}
                >
                  Añadir fotos
                </button>
              </div>

              {/* Cuadrícula de fotos */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {userPhotos.map((photo, index) => (
                  <img 
                    key={index} 
                    src={photo} 
                    style={{ width: '100%', height: '100px', borderRadius: '4px', objectFit: 'cover' }} 
                  />
                ))}
              </div>
              
              {userPhotos.length === 0 && (
                <p style={{color: '#65676b', fontSize: '14px'}}>Aún no hay fotos en tu galería.</p>
              )}
            </div>
          </div>
        </div>

        {/* EDITAR BIOGRAFÍA */}
        {showModal && (
          <div style={styles.modalOverlay}>
            <div style={{...styles.modalBox, backgroundColor: isDarkMode ? '#242526' : 'white', color: isDarkMode ? 'white' : 'black'}}>
              <h3>Editar Biografía</h3>
              <textarea 
                value={bioText}
                onChange={(e) => setBioText(e.target.value)}
                style={{...styles.textarea, backgroundColor: isDarkMode ? '#3a3b3c' : '#fff', color: isDarkMode ? '#fff' : '#000'}}
              />
              <div style={styles.modalButtons}>
                <button onClick={() => setShowModal(false)} style={styles.btnGray}>Cancelar</button>
                <button onClick={() => setShowModal(false)} style={styles.btnBlue}>Guardar</button>
              </div>
            </div>
          </div>
        )}

        {/* SELECTORES INDEPENDIENTES */}
        
        {/* Perfil */}
        <input 
          type="file" 
          ref={profileInputRef} 
          style={{ display: 'none' }} 
          accept="image/*" 
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setProfileImage(URL.createObjectURL(file));
          }} 
        />

        {/* Historia */}
        <input 
          type="file" 
          ref={storyInputRef} 
          style={{ display: 'none' }} 
          accept="image/*" 
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setStoryImage(URL.createObjectURL(file));
          }} 
        />

        {/* Galería */}
        <input 
          type="file" 
          ref={galleryInputRef} 
          style={{ display: 'none' }} 
          accept="image/*" 
          multiple
          onChange={(e) => {
            const files = e.target.files;
            if (files) {
              const newUrls = Array.from(files).map(file => URL.createObjectURL(file));
              setUserPhotos(prev => [...prev, ...newUrls]);
            }
          }} 
        />
      </div>
    </div>
  );
};

// ESTILOS
const styles = {
  container: { minHeight: '100vh', paddingBottom: '50px', fontFamily: 'Arial, sans-serif', transition: '0.3s' },
  mainContent: { maxWidth: '940px', margin: '0 auto' },
  headerCard: { borderRadius: '0 0 10px 10px', paddingBottom: '20px', textAlign: 'center' as 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' },
  coverPhoto: { width: '100%', height: '350px', objectFit: 'cover' as 'cover', borderRadius: '0 0 10px 10px' },
  avatarWrapper: { marginTop: '-90px', display: 'inline-block' },
  profilePic: { width: '168px', height: '168px', borderRadius: '50%', border: '4px solid #fff', backgroundColor: '#ebedf0' },
  userName: { fontSize: '32px', fontWeight: 'bold' as 'bold', marginTop: '10px' },
  userRole: { color: '#65676b', fontSize: '18px', marginBottom: '15px' },
  buttonGroup: { display: 'flex', justifyContent: 'center', gap: '8px', padding: '0 16px' },
  btnBlue: { backgroundColor: '#1877F2', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: '600' as '600', cursor: 'pointer' },
  btnGray: { backgroundColor: '#E4E6EB', color: '#050505', border: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: '600' as '600', cursor: 'pointer' },
  contentGrid: { display: 'flex', marginTop: '16px', gap: '16px', padding: '0 16px' },
  leftColumn: { width: '360px' },
  rightColumn: { flex: 1 },
  card: { borderRadius: '8px', padding: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' },
  cardTitle: { fontSize: '20px', fontWeight: 'bold' as 'bold', marginBottom: '15px' },
  bioText: { textAlign: 'center' as 'center', fontSize: '15px', marginBottom: '20px' },
  infoList: { borderTop: '1px solid #ebedf0', paddingTop: '15px' },
  infoItem: { marginBottom: '12px', fontSize: '15px' },
  modalOverlay: { position: 'fixed' as 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  modalBox: { padding: '20px', borderRadius: '8px', width: '90%', maxWidth: '500px' },
  textarea: { width: '100%', height: '100px', marginTop: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' },
  modalButtons: { display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }
};

export default Profile;