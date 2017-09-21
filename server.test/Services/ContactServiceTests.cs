using server.Interfaces;
using Server.Models;
using Server.Services;
using System.Collections.Generic;
using Xunit;



namespace server.test.Services
{
    public class ContactServiceTests
    {
        [Fact]
        public void GetAll_ShouldReturnAllAdded()
        {
            // Arrange
            var service = _getSingleContactService();

            // Act
            var result = service.GetContactList().Count;

            // Assert
            Assert.Equal(1, result);
        }

        [Fact]
        public void GetAll_ShouldReturnSeedDataIfNotPassedIn()
        {
            // Arrange
            var service = new ContactService();

            // Act
            var result = service.GetContactList().Count;

            // Assert
            Assert.Equal(2, result);
        }

        [Fact]
        public void GetById_ShouldReturnExistingContact()
        {
            // Arrange
            var service = _getSingleContactService();

            // Act
            var result = service.GetById(1).Id;

            // Assert
            Assert.Equal(1, result);
        }

        [Fact]
        public void GetById_ShouldReturnNullIfNotFound()
        {
            // Arrange
            var service = _getEmptyService();

            // Act
            var result = service.GetById(1);

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public void Create_ShouldStartAtOne()
        {
            // Arrange
            var service = _getEmptyService();

            // Act
            var result = service.Create("Test", "Contact", null, null, null, null).Id;

            // Assert
            Assert.Equal(1, result);
        }

        [Fact]
        public void Create_ShouldIncrementId()
        {
            // Arrange
            var service = _getSingleContactService();

            // Act
            var result = service.Create("Test2", "Contact", null, null, null, null).Id;

            // Assert
            Assert.Equal(2, result);
        }

        /* ============================================================================ */
        /* ========================= HELPER FUNCTIONS BELOW =========================== */
        /* ============================================================================ */

        /// <summary>
        /// Get contact service with no contacts.
        /// </summary>
        private IContactService _getEmptyService()
        {
            var contacts = new List<Contact>();
            return new ContactService(contacts);
        }

        /// <summary>
        /// Get contact service with a single contact.
        /// </summary>
        private IContactService _getSingleContactService()
        {
            var contacts = new List<Contact>
            {
                new Contact(1, "Test", "Contact")
            };

            return new ContactService(contacts);
        }
    }
}
