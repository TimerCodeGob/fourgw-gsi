
        import 'RAW_HERE';

        const scene = new My.Scene();
        const camera = new My.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 3;

        const canvas = document.getElementById("c");
        const renderer = My.createRenderer(canvas);

        const ambientLight = new My.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new My.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const loader = new My.TextureLoader();
        loader.load(
            'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg',
            function(texture) {
                const geometry = new My.SphereGeometry(1, 64, 64);
                const material = new My.MeshPhongMaterial({ map: texture });
                const earth = new My.Mesh(geometry, material);
                scene.add(earth);

                My.animate(() => {
                    earth.rotation.y += 0.002;
                    renderer.render(scene, camera);
                });
            }
        );

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
