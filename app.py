
import streamlit as st

st.set_page_config(
    page_title="Guru Prasanna | Portfolio",
    page_icon="💻",
    layout="wide"
)

st.title("Guru Prasanna")
st.subheader("Web Developer | Fresher")

st.write(
    "Welcome to my personal portfolio. "
    "I am interested in web development "
    "and Artificial Intelligence & Machine Learning."
)

st.header("About Me")
st.write(
    "I am pursuing B.Tech in Artificial Intelligence "
    "and Machine Learning and developing my programming skills."
)

st.header("Technical Skills")
st.write("Python | C++ | HTML | CSS | JavaScript | React.js")

st.header("Projects")
st.write("Explore my projects on GitHub.")

st.link_button(
    "Visit My GitHub",
    "https://github.com/Guruyadav118"
)

st.header("Contact")
st.write("Email: guruprasanna754@gmail.com")
