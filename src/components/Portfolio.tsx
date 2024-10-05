"use client"; // <--- Agregar esta línea
import { useState, useEffect, useRef } from 'react'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Skill {
  name: string
  icon: string
}

export default function Portfolio() {
  const [hoveredSkill, setHoveredSkill] = useState<null | string>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const intersectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (intersectionRef.current) {
      observer.observe(intersectionRef.current)
    }

    return () => {
      if (intersectionRef.current) {
        observer.unobserve(intersectionRef.current)
      }
    }
  }, [])

  const skills: Skill[]
   = [
    { name: 'HTML', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path></svg>', },
    { name: 'CSS', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><linearGradient id="TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1" x1="16.33" x2="32.293" y1="-2.748" y2="41.109" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1)" d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"></path><path fill="#35c1f1" d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"></path><path fill="#fff" d="M33.1,13H24v4h4.9l-0.3,4H24v4h4.4l-0.3,4.5L24,30.9v4.2l7.9-2.6L32.6,21l0,0L33.1,13z"></path><path fill="#d6e0e9" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4	L19.8,27z"></path><path d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M34.164,12H33.1H24h-9.2h-1.078l0.081,1.075l0.3,4L14.172,18H15.1H24h3.822l-0.15,2H24h-4.6h-1.051 l0.052,1.05l0.2,4L18.649,26H15.8h-1.056l0.058,1.054l0.3,5.5l0.037,0.682l0.649,0.214l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6 l0.644-0.212l0.041-0.677l0.7-11.5l0.5-7.998L34.164,12L34.164,12z M20.761,26H24h3.331l-0.185,2.769L24,29.843l-3.128-1.068 l-0.073-1.815L20.761,26L20.761,26z" opacity=".05"></path><path d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M33.632,12.5H33.1H24h-9.2h-0.539l0.04,0.537l0.3,4l0.035,0.463H15.1H24h4.361l-0.225,3H24h-4.6h-0.526 l0.026,0.525l0.2,4l0.024,0.475H19.6H24h3.866l-0.242,3.634L24,30.372l-3.614-1.234L20.3,26.98L20.28,26.5H19.8h-4h-0.528 l0.029,0.527l0.3,5.5l0.019,0.341l0.324,0.107l7.9,2.6L24,35.626l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.5-7.999 L33.632,12.5L33.632,12.5z" opacity=".07"></path></svg>' },
    { name: 'JavaScript', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path></svg>' },
    { name: 'TypeScript', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path></svg>' },
    { name: 'React', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle></svg>' },
    // { name: 'Next.js', icon: '/icons/nextjs.svg' },
    { name: 'Node.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="#388e3c" d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"></path><path fill="#37474f" d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"></path><path fill="#2e7d32" d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#4caf50" d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#37474f" d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"></path></svg>' },
    { name: 'NestJS', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="#f50057" d="M24.5,32.88c0,0-0.01-0.04-0.02-0.12C24.5,32.84,24.5,32.88,24.5,32.88z"></path><path fill="#f50057" d="M27.375,8.625c0,0-0.375-1.375,0.125-2.5s0.5-1.875-0.5-3c2-0.125,2.75,1.25,2.75,1.25l0.025,0.159 c0.118,0.766-0.278,1.494-0.946,1.888C28.219,6.781,27.563,7.437,27.375,8.625z"></path><path fill="#f50057" d="M41.63,36.24c0.02-0.21,0.34-3.04-0.38-4.36c-1.5,4.24-3,8.12-7.37,10.87 c0.62-1.25,1.62-3.25,2.62-6.25c-3,4-9,8-13.5,8.25c3.04-1.68,4.75-3.84,5.5-5.25c0,0-1.75,0.5-3.88,0.75 c2.88-1.75,4.88-4.87,3.88-9.75c-2,6.25-4.75,8.25-8.38,8.62c-3.62,0.38-6.87-1.5-6.87-1.5l1.25-0.12c0,0-3.25-2.5-2.12-5.75 c0.05-0.16,0.11-0.31,0.18-0.45c0.82-1.82,3.61-0.9,3.32,1.07v0.01c0,0,0.87,2.37,3.24,1.74c0.76-1.24,1.26-2.5,1.26-2.5l0.37,1.63 c0,0,1.75-0.75,1.75-2.13c1.5,0.57,1.88,1.28,1.97,1.59c-0.26-1.4-2.52-11.03-14.49-10.89l-2.09,1.94 c-0.14,0.13-0.36,0.02-0.34-0.16L7.71,22l0.14-0.14c-0.04,0.01-0.09,0-0.13,0L7.71,22l-0.82,0.76c-0.14,0.13-0.36,0.02-0.34-0.16 l0.1-1.02c-1.74-0.74-1.9-2.7-1.9-2.7S2.58,18.27,3.5,15.5C4,14,5.2,13.85,5.71,13.97c0.65,0.15,1.32,0.16,1.94-0.09 c0.9-0.36,2.05-1.05,2.85-2.38C12,9,14.25,8,19.12,8c6.45,0,9.05,1.98,9.35,2.22c-0.18-0.21-1.27-1.66,1.03-3.84 c2.27-2.16,1.86-2.67,1.77-2.75c0.34,0.1,4.75,1.6,5.23,7.37c0.5,6-6.5,7.25-6.5,7.25s9,1.75,9.12-6.75 c1.76,1,5.38,4.75,5.88,12.88C45.49,32.26,41.84,36.03,41.63,36.24z"></path><path fill="#f50057" d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"></path><path fill="#f50057" d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"></path></svg>' },
    // { name: 'Express', icon: '/icons/express.svg' },
    { name: 'MongoDB', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path></svg>' },
    // { name: 'SQL Server', icon: '/icons/microsoftsqlserver.svg' },
    // { name: 'MySQL', icon: '/icons/mysql.svg' },
    { name: 'AWS', icon: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32"style="fill:#FFFFFF;"><path d="M 6.5839844 9.0097656 C 5.2239844 9.0097656 3.8432813 9.5400781 3.6132812 9.8300781 C 3.5532812 9.9500781 3.4141406 10.919922 3.7441406 10.919922 C 3.8541406 10.919922 3.9046094 10.939062 4.2246094 10.789062 C 5.4246094 10.319062 6.1849219 10.330078 6.2949219 10.330078 C 7.6449219 10.200078 8.4246875 11.120547 8.3046875 12.310547 L 8.3046875 13.009766 C 7.1646875 12.739766 6.5133594 12.730469 6.1933594 12.730469 C 4.5333594 12.630469 3 13.505688 3 15.429688 C 3 17.539687 4.8832812 17.990937 5.6132812 17.960938 C 6.7032812 17.970938 7.7435937 17.480859 8.4335938 16.630859 C 8.9835938 17.860859 9.33375 17.779297 9.34375 17.779297 C 9.44375 17.779297 9.5235156 17.739453 9.6035156 17.689453 L 10.173828 17.289062 C 10.273828 17.229063 10.353281 17.129766 10.363281 17.009766 C 10.353281 16.719766 9.8330469 16.269766 9.8730469 15.259766 L 9.8730469 12.140625 C 9.9330469 11.280625 9.6542187 10.439062 9.0742188 9.7890625 C 8.3842188 9.2090625 7.4739844 8.9297656 6.5839844 9.0097656 z M 25.957031 9.0097656 C 23.957031 9.0097656 22.807891 10.259297 22.837891 11.529297 C 22.837891 13.269297 24.596875 13.820859 24.796875 13.880859 C 26.486875 14.410859 26.7175 14.430078 27.1875 14.830078 C 27.5875 15.240078 27.537266 16.040625 26.947266 16.390625 C 26.777266 16.490625 26.046484 16.929844 24.396484 16.589844 C 23.846484 16.479844 23.557422 16.350156 23.107422 16.160156 C 22.987422 16.120156 22.707031 16.049922 22.707031 16.419922 L 22.707031 16.910156 C 22.707031 17.140156 22.846641 17.349219 23.056641 17.449219 C 24.106641 17.979219 25.366719 18 25.636719 18 C 25.676719 18 27.976094 18.001219 28.746094 16.449219 C 28.905094 16.129219 29.316875 14.960937 28.546875 13.960938 C 27.906875 13.210938 27.356797 13.130859 25.716797 12.630859 C 25.576797 12.590859 24.366953 12.279687 24.376953 11.429688 C 24.316953 10.339688 25.797422 10.280781 26.107422 10.300781 C 27.357422 10.280781 27.976406 10.749297 28.316406 10.779297 C 28.466406 10.779297 28.537109 10.690234 28.537109 10.490234 L 28.537109 10.029297 C 28.547109 9.9192969 28.507266 9.8107031 28.447266 9.7207031 C 28.047266 9.2007031 26.517031 9.0097656 25.957031 9.0097656 z M 10.777344 9.2597656 C 10.667344 9.2797656 10.587422 9.39 10.607422 9.5 C 10.627422 9.63 10.647266 9.760625 10.697266 9.890625 L 12.9375 17.279297 C 12.9875 17.519297 13.146094 17.780234 13.496094 17.740234 L 14.316406 17.740234 C 14.816406 17.790234 14.886484 17.309766 14.896484 17.259766 L 16.367188 11.099609 L 17.857422 17.269531 C 17.867422 17.319531 17.937734 17.8 18.427734 17.75 L 19.257812 17.75 C 19.617812 17.79 19.787891 17.529062 19.837891 17.289062 C 22.357891 9.1790625 22.187031 9.7303906 22.207031 9.6503906 C 22.247031 9.2303906 22.006797 9.2595313 21.966797 9.2695312 L 21.076172 9.2695312 C 20.626172 9.2195313 20.537578 9.6304688 20.517578 9.7304688 L 18.857422 16.140625 L 17.357422 9.7304688 C 17.287422 9.2404687 16.887109 9.2595313 16.787109 9.2695312 L 16.017578 9.2695312 C 15.577578 9.2295313 15.4675 9.5804687 15.4375 9.7304688 L 13.947266 16.050781 L 12.347656 9.7304688 C 12.307656 9.5304687 12.177109 9.2197656 11.787109 9.2597656 L 10.777344 9.2597656 z M 6.5234375 13.890625 C 7.2434375 13.900625 7.8649219 14.009375 8.2949219 14.109375 C 8.2949219 14.609375 8.313125 14.889844 8.203125 15.339844 C 8.063125 15.819844 7.444375 16.690937 5.984375 16.710938 C 5.144375 16.750937 4.5945313 16.089844 4.6445312 15.339844 C 4.5945313 14.139844 5.8334375 13.840625 6.5234375 13.890625 z M 29.041016 20.001953 C 28.107641 20.014953 27.005922 20.224047 26.169922 20.810547 C 25.911922 20.989547 25.957141 21.238078 26.244141 21.205078 C 27.184141 21.092078 29.276391 20.838406 29.650391 21.316406 C 30.025391 21.794406 29.235719 23.766437 28.886719 24.648438 C 28.778719 24.911437 29.007047 25.020312 29.248047 24.820312 C 30.812047 23.510312 31.218438 20.764141 30.898438 20.369141 C 30.737937 20.171641 29.974391 19.988953 29.041016 20.001953 z M 1.2167969 21.001953 C 0.99873437 21.031953 0.9048125 21.308344 1.1328125 21.527344 C 5.0498125 25.201344 10.225656 27 15.972656 27 C 20.071656 27 24.830234 25.662578 28.115234 23.142578 C 28.658234 22.723578 28.195672 22.09575 27.638672 22.34375 C 23.955672 23.96875 19.955453 24.751953 16.314453 24.751953 C 10.918453 24.751953 5.69475 23.625406 1.46875 21.066406 C 1.37625 21.010406 1.2894844 20.991953 1.2167969 21.001953 z"></path></svg>' },
    // { name: 'Git', icon: '/icons/git.svg' },
    // { name: 'Linux', icon: '/icons/linux.svg' },
  ]

  const workExperience = [
    {
      company: 'EaseTrain',
      role: 'Fullstack Developer',
      dates: 'Feb 2024 – Present',
      description: 'Developed a platform that allows trainers to manage personalized workout routines, track student progress, and maintain communication through an integrated chat. Technologies used: React, Nest.js, and MySQL. Implemented secure authentication using JWT and deployed on Digital Ocean. \n\nCheck it out at: https://trainease.luciano-yomayel.com',
      url: 'https://trainease.luciano-yomayel.com',
    },
    {
      company: 'Freelance',
      role: 'Fullstack Developer',
      dates: 'Aug 2023 – Feb 2024',
      description: 'Configured and customized Dolibarr ERP & CRM for inventory and logistics management. Deployed the system on a dedicated server, enhancing warehouse management efficiency.',
    },
    {
      company: 'Join Solutions',
      role: 'Fullstack Developer',
      dates: 'Jan 2021 – Jul 2023',
      description: 'Led web application projects using Angular and NestJS, improving client satisfaction and efficiency. Developed secure RESTful APIs and managed custom projects. Streamlined client communication and project delivery using Agile Scrum methodologies.',
    },
  ]

  const projects = [
    {
      name: 'Handball Statistics Page',
      type: 'Web Application',
      duration: 'May 2023 – Jun 2023',
      description: 'Created a web application for displaying handball player statistics and fair play tables, attracting over 10k monthly visits and becoming a popular resource for handball enthusiasts.',
      url: 'https://handball-metropolitano.luciano-yomayel.com',
    },
  ]

  // const [headerHeight, setHeaderHeight] = useState(0)
  // const headerRef = useRef<HTMLElement>(null)

  // useEffect(() => {
  //   if (headerRef.current) {
  //     setHeaderHeight(headerRef.current.offsetHeight)
  //   }
  // }, [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/foto.jpeg"
              alt="Luciano Yomayel"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold text-navy-600">Luciano Yomayel</h1>
              <p className="text-sm text-gray-600">Full Stack Developer</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="http://linkedin.com/in/luciano-yomayel" className="text-gray-600 hover:text-navy-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="http://github.com/LuYomayel" className="text-gray-600 hover:text-navy-600 transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            {/* <Link href="http://luciano-yomayel.com/" className="text-gray-600 hover:text-navy-600 transition-colors">
              Portfolio
            </Link> */}
          </nav>
        </div>
      </header>

      {/* Full-width picture */}
      <div 
        className="w-full relative"
        // style={{ height: `calc(100vh - ${headerHeight}px)` }}
        style={{ height: 'calc(100vh)' }}
      >
        <Image
          src='/workspace.jpg'
          alt="Developer workspace"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className='absolute '>
          <h1 className="text-2xl font-bold text-navy-600">Luciano Yomayel</h1>
          <p className="text-sm text-gray-600">Full Stack Developer</p>
        </div>
      </div>

      {/* Main Content */}
      <main 
        ref={intersectionRef}
        className={`bg-gray-100 transition-all duration-1000 ease-in-out ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row md:space-x-8">
          {/* Left Side - Sticky */}
          <div className="md:w-1/3 space-y-8 md:sticky md:top-20 md:self-start pt-6">
            {/* About Me */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-navy-600 mb-4">About Me</h2>
              <p className="text-gray-700 mb-4">
                Software developer with experience in creating custom solutions and managing projects using Agile Scrum methodologies. Proficient in developing web applications using React, Next.js, NestJS, and MongoDB, and deploying projects in cloud environments like AWS.
              </p>
              <p className="text-gray-700">
                Actively working with the MERN stack to further enhance my development skills. Seeking a challenging role to contribute to innovative projects.
              </p>
            </section>

            {/* Footer */}
            <footer className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-center space-x-4 mb-4">
                <Link href="http://linkedin.com/in/luciano-yomayel" className="text-gray-600 hover:text-navy-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="http://github.com/LuYomayel" className="text-gray-600 hover:text-navy-600 transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
              </div>
              <div className="text-center space-y-2">
                <Link href="mailto:l.yomayel@gmail.com" className="text-sm text-gray-600 hover:text-navy-600 transition-colors flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-2" />
                  l.yomayel@gmail.com
                </Link>
                <p className="text-sm text-gray-600 flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +61424336250
                </p>
              </div>
            </footer>
          </div>

          {/* Right Side - Scrollable */}
          <div className="md:w-2/3 space-y-8 mt-4 md:mt-0 md:overflow-y-auto md:max-h-[calc(100vh-10rem)] pt-6">
            {/* Work Experience */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-navy-600 mb-4">Work Experience</h2>
              <div className="space-y-6">
                {workExperience.map((job, index) => (
                  <div key={index} className="border-l-4 border-navy-600 pl-4 transition-all hover:shadow-lg hover:border-l-8 p-4 rounded">
                    <h3 className="text-xl font-semibold">{job.company}</h3>
                    <p className="text-gray-600">{job.role}</p>
                    <p className="text-sm text-gray-500">{job.dates}</p>
                    <p className="mt-2 text-gray-700">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-navy-600 mb-4">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 transition-all hover:shadow-lg hover:bg-gray-100">
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="text-sm text-gray-600">{project.type} | {project.duration}</p>
                    <p className="mt-2 text-gray-700">{project.description}</p>
                    {project.url && (
                      <Link href={project.url} className="mt-2 inline-block text-navy-600 hover:underline">
                        View Project
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-navy-600 mb-4">Skills</h2>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-2 rounded-lg transition-all hover:bg-gray-100"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Renderiza el SVG directamente usando dangerouslySetInnerHTML */}
                    <div
                      className="w-25 h-25"
                      dangerouslySetInnerHTML={{ __html: skill.icon }}
                    ></div>
                    <p className={`mt-2 text-sm ${hoveredSkill === skill.name ? 'text-navy-600 font-semibold' : 'text-gray-600'}`}>
                      {/* {skill.name} */}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}