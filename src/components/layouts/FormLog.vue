<template>
    <div class="h-screen" style="background-image: linear-gradient(to right, #314f79, #223653);">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 relative" style="background-color: #171d25;">
                <div class="bg-tittle top-0 left-0 right-0 bg-gray-200 rounded-t-lg flex items-center justify-center"
                    style="height: 45%;">
                    <img src="../../assets/awos-bg.png" alt="" style="height: 100%; width: 100%;" class="rounded-t-lg">
                </div>
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8" style="margin-top: 10px;">
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div class="form-1">
                            <input type="text" name="user" id="user"
                                class="bg-gray-200 border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5"
                                placeholder="Username">
                        </div>
                        <div class="form-2">
                            <input type="password" name="password" id="password" placeholder="Password"
                                class="bg-gray-200 border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5">
                        </div>
                        <button type="button" @click="login"
                            class="w-full font-medium rounded-lg text-sm px-5 py-2.5 custom-button">
                            Log in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const router = useRouter();
        const users = ref([]);

        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost/localawosapi/getuserdata.php');
                const data = await response.json();
                if (data.status.code === 200) {
                    users.value = data.USER;
                } else {
                    alert('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        const login = () => {
            const usernameInput = document.getElementById('user').value;
            const passwordInput = document.getElementById('password').value;

            const user = users.value.find(user => user.nama === usernameInput && user.password === passwordInput);
            if (user) {
                localStorage.setItem("auth", true);
                router.push({ name: "realtime" });
            } else {
                alert("Username atau password salah");
            }
        };

        onMounted(() => {
            fetchUsers();
        });

        return {
            login
        };
    }
}
</script>


<style scoped>
.custom-button {
    color: white;
    background-color: #314f79;
    transition: background-color 0.3s ease;
}

.custom-button:hover {
    background-color: #456592;
}
</style>
